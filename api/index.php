 <?php

header('Content-Type: application/json; charset=utf-8');
require_once($_SERVER['DOCUMENT_ROOT']."/api/Classes/Class.Main.php");


$DICard = new DICard();
$response = $DICard->GetAllCards();

echo json_encode($response);

 ?>