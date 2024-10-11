 <?php

header('Content-Type: application/json; charset=utf-8');
require_once($_SERVER['DOCUMENT_ROOT']."/api/Classes/Class.Main.php");


$requestData = json_decode(file_get_contents('php://input'), true);
$area = $requestData['Area'];
$action = $requestData['Action'];
$payload = $requestData['Payload'];

$DICard = new DICard();

$response = new Response(400, null, "Failed to Complete Operation: ".$area."/".$action);

if ($area == "Cards") {
    if ($action == "GetAll") {
        $response = $DICard->GetAllCards();
    }
    else if ($action == "GetRandomHand") {
        $numberOfCards = $payload;
        $response = $DICard->GetRandomHand($numberOfCards);
    }
    else if ($action == "StartCardGame") {
        $numberOfCards = $payload;
        $response = $DICard->StartCardGame($numberOfCards);
    }
}


echo json_encode($response);

 ?>