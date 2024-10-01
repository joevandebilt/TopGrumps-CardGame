<?php

    //This class is meant to operate as a headless loading only data interfaces, site info and class objects
    //This can either be loaded from the Main Class or loaded from a headless page, i.e an API

    //Include our custom site objects
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Objects/Object.Card.php');
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Objects/Object.Response.php');

    //Include Data Interfaces
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/DI/DI.Card.php');
?>