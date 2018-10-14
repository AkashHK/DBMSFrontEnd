<?php
$webdevlocation = "./tasksFolder/webdev/";
$appdevlocation = "./tasksFolder/appdev/";
$tronixlocation = "./tasksFolder/tronix/";
$algoslocation = "./tasksFolder/algos";
$webdevfiles = array_slice(scandir($webdevlocation),2);
$appdevfiles = array_slice(scandir($appdevlocation),2);
$tronixfiles = array_slice(scandir($tronixlocation),2);
$algosfiles = array_slice(scandir($algoslocation),2);
$res = new \stdClass();
$res->webdev = $webdevfiles;
$res->appdev = $appdevfiles;
$res->tronix = $tronixfiles;
$res->algos = $algosfiles;
$myJson = json_encode($res);
echo $myJson;
?>
