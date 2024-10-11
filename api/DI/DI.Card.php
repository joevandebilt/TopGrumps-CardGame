<?php
class DICard
{
    function GetAllCards()
    {
        $response = new Response();
        try
        {
            $DB = new MySql();
            $List = array();
            $DB->query("SELECT * FROM Grump_Cards ORDER BY AirDate");
            if ($DB->hasErrors())
            {
                $response->SetStatusCode(500);
                $response->SetMessage($DB->showErrors());
            }
            else 
            {
                $i=0;
                $Status = 204;
                while ($row = $DB->fetchObject())
                {
                    $List[$i] = new Card($row);
                    $Status = 200;
                    $i++;                        
                }
                $response->SetPayload($List);
                $response->SetStatusCode($Status);
            }
        }
        catch (Exception $e) 
        {
            $response->SetStatusCode(500);
            $response->SetMessage('Caught exception: ',  $e->getMessage());
        }
        return $response;
    }

    function GetCardById($id)
    {
        $response = new Response();
        try
        {
            $DB = new MySql();
            $List = array();
            $DB->query("SELECT * FROM Grump_Cards WHERE ID = ".$id);
            if ($DB->hasErrors())
            {
                $response->SetStatusCode(500);
                $response->SetMessage($DB->showErrors());
            }
            else 
            {
                $i=0;
                $Status = 204;
                while ($row = $DB->fetchObject())
                {
                    $List[$i] = new Card($row);
                    $Status = 200;
                    $i++;                        
                }
                $response->SetPayload($List);
                $response->SetStatusCode($Status);
            }
        }
        catch (Exception $e) 
        {
            $response->SetStatusCode(500);
            $response->SetMessage('Caught exception: ',  $e->getMessage());
        }
        return $response;
    }

    function GetRandomHand($numberOfCards)
    {
        $response = new Response();
        try
        {   
            $allCards = $this->GetAllCards()->Payload;
            $hand = [];
            $i = 0;

            while ($i < $numberOfCards)
            {
                //Get the number of cards
                $maxCards = count($allCards)-1;

                //Select one at Random
                $rand = rand(0, $maxCards);

                //Add it to our hand
                $hand[$i] = $allCards[$rand];

                //Remove the card from the deck
                array_splice($allCards, $rand, 1);
                $i++;
            }

            $response->SetPayload($hand);
            $response->SetStatusCode(200);
        }
        catch (Exception $e) 
        {
            $response->SetStatusCode(500);
            $response->SetMessage('Caught exception: ',  $e->getMessage());
        }
        return $response;
    }

    function StartCardGame($numberOfCards) 
    {
        $response = new Response();
        try
        {   
            $gameCards = $this->GetRandomHand($numberOfCards*2)->Payload;

            $Game = new GameParameters();
            $Game->MyHand = array_slice($gameCards, 0, $numberOfCards);
            $Game->ComputerHand = array_slice($gameCards, $numberOfCards, $numberOfCards);

            $response->Payload = $Game;
            $response->SetStatusCode(200);
        }
        catch (Exception $e) 
        {
            $response->SetStatusCode(500);
            $response->SetMessage('Caught exception: ',  $e->getMessage());
        }
        return $response;
    }
}
?>