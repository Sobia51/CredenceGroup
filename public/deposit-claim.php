<?php
// Receives the Deposit claim form on /deposit-claims and emails it to the group inbox
// as a branded HTML email with a plain-text alternative.
header('Content-Type: application/json');

$TO   = 'info@credence-group.ae';
$FROM = 'no-reply@credence-group.ae'; // must be a mailbox on this domain for Bluehost to deliver

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok' => false, 'error' => 'Method not allowed']); exit; }
if (!empty($_POST['company_website'])) { echo json_encode(['ok' => true]); exit; } // honeypot

$clean = fn($v) => trim(str_replace(["\r", "\n"], ' ', strip_tags((string)$v)));
$contract = $clean($_POST['contract'] ?? '');
$amountIn = str_replace(',', '', $clean($_POST['amount'] ?? ''));
$ref      = $clean($_POST['reference'] ?? '');

if (!preg_match('/^[A-Za-z0-9][A-Za-z0-9\-\/ ]{2,39}$/', $contract)) { http_response_code(422); echo json_encode(['ok' => false, 'error' => 'Invalid contract number']); exit; }
if (!is_numeric($amountIn) || (float)$amountIn <= 0 || (float)$amountIn > 10000000) { http_response_code(422); echo json_encode(['ok' => false, 'error' => 'Invalid amount']); exit; }
if (!preg_match('/^DC-\d{6}-[A-Z0-9]{4}$/', $ref)) { $ref = 'DC-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 4)); }

date_default_timezone_set('Asia/Dubai');
$amount = 'AED ' . number_format((float)$amountIn, 2);
$sent   = date('d M Y, H:i') . ' (GST)';
$ip     = $_SERVER['REMOTE_ADDR'] ?? '';
$h      = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');

$subject = "Deposit claim $ref — Contract $contract — $amount";

// ---------- Email template ----------
$text = "NEW DEPOSIT CLAIM\n"
      . "Credence Group · credence-group.ae\n\n"
      . "Reference:        $ref\n"
      . "Contract number:  $contract\n"
      . "Claim amount:     $amount\n"
      . "Submitted:        $sent\n\n"
      . "Next steps\n"
      . "1. Verify the contract number and deposit held in the ledger.\n"
      . "2. Confirm handover inspection is complete.\n"
      . "3. Contact the tenant to arrange the refund, quoting $ref.\n\n"
      . "Sent from the Deposit claim form. IP: $ip\n";

$row = fn($k, $v, $accent = false) =>
  '<tr><td style="padding:14px 20px;border-top:1px solid #e7dfcd;font:600 11px/1.4 Arial,sans-serif;letter-spacing:1.6px;text-transform:uppercase;color:#7a7260;width:42%">' . $k . '</td>'
  . '<td style="padding:14px 20px;border-top:1px solid #e7dfcd;font:' . ($accent ? '700 18px' : '400 15px') . '/1.4 Arial,sans-serif;color:' . ($accent ? '#9a7432' : '#1a1f2e') . ';text-align:right">' . $v . '</td></tr>';

$html = '<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f3efe6">'
. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3efe6;padding:32px 12px"><tr><td align="center">'
. '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e7dfcd">'
  // header band
. '<tr><td style="background:#070b18;padding:26px 32px;border-bottom:3px solid #d1a85a">'
.   '<div style="font:600 18px/1 Arial,sans-serif;letter-spacing:4px;color:#d1a85a">CREDENCE</div>'
.   '<div style="font:400 10px/1 Arial,sans-serif;letter-spacing:3px;color:#9aa0ad;margin-top:8px;text-transform:uppercase">Group · UAE</div>'
. '</td></tr>'
  // title
. '<tr><td style="padding:32px 32px 8px">'
.   '<div style="font:600 11px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#9a7432">New deposit claim</div>'
.   '<div style="font:400 26px/1.25 Arial,sans-serif;color:#1a1f2e;margin-top:12px">' . $h($amount) . ' requested</div>'
.   '<div style="font:400 14px/1.6 Arial,sans-serif;color:#5b5f6b;margin-top:8px">A tenant has submitted a security deposit refund claim through credence-group.ae.</div>'
. '</td></tr>'
  // details
. '<tr><td style="padding:20px 32px 8px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e7dfcd;border-top:0;background:#fbf9f4">'
.   $row('Reference', $h($ref), true) . $row('Contract number', $h($contract)) . $row('Claim amount', $h($amount)) . $row('Submitted', $h($sent))
. '</table></td></tr>'
  // next steps
. '<tr><td style="padding:24px 32px 8px">'
.   '<div style="font:600 11px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#7a7260;margin-bottom:12px">Next steps</div>'
.   '<div style="font:400 14px/1.8 Arial,sans-serif;color:#1a1f2e">1. Verify the contract number and deposit held in the ledger.<br>2. Confirm the handover inspection is complete.<br>3. Contact the tenant to arrange the refund, quoting <b>' . $h($ref) . '</b>.</div>'
. '</td></tr>'
  // footer
. '<tr><td style="padding:28px 32px;border-top:1px solid #e7dfcd;margin-top:16px">'
.   '<div style="font:400 12px/1.6 Arial,sans-serif;color:#8a8e99">Sent automatically from the Deposit claim form on credence-group.ae · IP ' . $h($ip) . '</div>'
. '</td></tr>'
. '</table></td></tr></table></body></html>';

$boundary = 'b' . bin2hex(random_bytes(8));
$body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$text\r\n"
      . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$html\r\n"
      . "--$boundary--";
$headers = "From: Credence Website <$FROM>\r\nMIME-Version: 1.0\r\nContent-Type: multipart/alternative; boundary=\"$boundary\"\r\nX-Credence-Form: deposit-claim\r\n";

if (mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, "-f$FROM")) {
  echo json_encode(['ok' => true, 'reference' => $ref]);
} else {
  http_response_code(500); echo json_encode(['ok' => false, 'error' => 'Mail could not be sent']);
}
