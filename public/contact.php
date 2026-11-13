<?php
// Receives the "Register your interest" form on / and emails it to the group inbox.
// Runs on Bluehost's PHP; the SPA rewrite in .htaccess leaves real files like this alone.
header('Content-Type: application/json');

$TO = 'info@credence-group.ae';
$FROM = 'no-reply@credence-group.ae'; // must be an address on this domain for Bluehost to deliver

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok' => false, 'error' => 'Method not allowed']); exit; }
if (!empty($_POST['company_website'])) { echo json_encode(['ok' => true]); exit; } // honeypot: silently drop bots

$clean = fn($v) => trim(str_replace(["\r", "\n"], ' ', strip_tags((string)$v)));
$name  = $clean($_POST['name'] ?? '');
$email = $clean($_POST['email'] ?? '');
$need  = $clean($_POST['need'] ?? '');
$company = $clean($_POST['company'] ?? '');
$phone   = $clean($_POST['phone'] ?? '');
$details = trim(strip_tags((string)($_POST['details'] ?? ''))); // multi-line body text, not used in headers

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422); echo json_encode(['ok' => false, 'error' => 'Name and a valid email are required']); exit;
}

$subject = 'Website enquiry — ' . ($need !== '' ? $need : 'General');
$body = "New enquiry from credence-group.ae\n\nName: $name\n" . ($company !== '' ? "Company: $company\n" : '') . "Email: $email\n" . ($phone !== '' ? "Phone: $phone\n" : '') . "I need: $need\n" . ($details !== '' ? "\n$details\n" : '') . "\nSent: " . date('Y-m-d H:i T') . "\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n";
$headers = "From: Credence Website <$FROM>\r\nReply-To: $name <$email>\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, "-f$FROM")) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500); echo json_encode(['ok' => false, 'error' => 'Mail could not be sent']);
}
