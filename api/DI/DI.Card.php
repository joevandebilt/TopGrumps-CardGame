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
}
?>