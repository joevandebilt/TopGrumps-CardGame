<?php

    //Set error reporting level
    //comment out in release mode
    error_reporting(E_ALL);				
    ini_set('display_errors', 'on');	

    //Set time zone across the site
    date_default_timezone_set("Europe/London");	

    //Include Secrets Config
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Classes/Class.Secrets.php');

    //Include Major Classes
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Classes/Class.Config.php');
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Classes/Class.MySQL.php');
    // require_once($_SERVER['DOCUMENT_ROOT'].'/Classes/Class.Helpers.php');
    // require_once($_SERVER['DOCUMENT_ROOT'].'/Classes/Class.PHPSession.php');

    //Main PHP Scripts
    require_once($_SERVER['DOCUMENT_ROOT'].'/api/Classes/Class.Site-Classes.php');
?>