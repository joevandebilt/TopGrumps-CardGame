<?php

class Card {

    public $ID;
    public $Name;
    public $Strength;
    public $Stamina;
    public $Reliability;
    public $Intelligence;
    public $Intimidation;
    public $Strengths;
    public $Weaknesses;
    public $FinishingMove;
    public $HP;
    public $Image;
    public $AirDate;
    public $EpisodeUrl;

    public function __construct($row) {
        $this->ID = $row->ID;
        $this->Name = $row->Name;
        $this->Strength = $row->Strength;
        $this->Stamina = $row->Stamina;
        $this->Reliability = $row->Reliability;
        $this->Intelligence = $row->Intelligence;
        $this->Intimidation = $row->Intimidation;
        $this->Strengths = $row->Strengths;
        $this->Weaknesses = $row->Weaknesses;
        $this->FinishingMove = $row->FinishingMove;
        $this->HP = $row->HP;
        $this->Image = $row->Image;
        $this->AirDate = $row->AirDate;
        $this->EpisodeUrl = $row->EpisodeUrl;
    }
}

?>