<?php
error_reporting(0);
$archivoxml = "http://feeds.feedburner.com/disparamargot?format=xml";
$contenido_xml = "";
if($d = fopen($archivoxml, "r")){
	while ($aux= fgets($d, 1024)){
		$contenido_xml .= $aux;
	}
	fclose($d);
}else{
	echo Zend_Registry::get('txterr')->getProperty("sp202");;
}
$xml = simplexml_load_string($contenido_xml);
for($i=0; $i<count($xml->channel->item); $i++){
	//$xml->Item[$i]->ItemTitle
	$carp = '/jorge/iTunes/Podcasts/Dispara_Margot_dispara/';
	$arch = '';
	$archa = '';
	$flnme = '';
	//if($i==0){
		$arch = $xml->channel->item[$i]->enclosure['url'];
		$archa = explode("/", $arch);
		$flnme = $archa[count($archa)-1];
		$flnmea=explode("-",$flnme);
		$mes = "";
		$mesn=$flnmea[1]+1-1;
		switch ($mesn) {
		    case 1: $mes = 'Enero'; break;
		    case 2: $mes = 'Febrero';  break;
		    case 3: $mes = 'Marzo';  break;
		    case 4: $mes = 'Abril';  break;
		    case 5: $mes = 'Mayo';  break;
		    case 6: $mes = 'Junio';  break;
		    case 7: $mes = 'Julio';  break;
		    case 8: $mes = 'Agosto';  break;
		    case 9: $mes = 'Septiembre'; break;
		    case 10: $mes = 'Octubre'; break;
		    case 11: $mes = 'Noviembre'; break;
		    case 12: $mes = 'Diciembre'; break;
		}
		$carpw = $carp . $flnmea[0].$flnmea[1]."_".$mes;
		//echo $carp;
		//echo "<br>";
		if(!file_exists($carpw)){
			mkdir($carpw,0777,true);
		}
	//}
	$arch = $xml->channel->item[$i]->enclosure['url'];
	$archa = explode("/", $arch);
	$flnme = $archa[count($archa)-1];
	$cpfile = $carpw."/".$flnme;
	if(!file_exists($cpfile)){
		echo "Copiando... " . $flnme . "<br>";
		if(!copy($arch,$cpfile)){
			//echo "No se pudo copiar<br>";
			echo "<a href='".$arch."'>".$flnme."</a><br>";
		}
	} else {
		//echo "Ya esta en carpeta.<br>";
	}
	//echo $xml->channel->item[$i]->enclosure['url'];
	//echo "<br><br>";
}
/*
object(SimpleXMLElement)#4 (12) { 
	["title"]=> string(24) "Dispara, Margot, dispara" 
	["link"]=> string(44) "http://disparamargotdispara.sergiozurita.com" 
	["description"]=> string(21) "Un programa de Exa FM" 
	["lastBuildDate"]=> string(31) "Fri, 17 Oct 2014 19:03:29 +0000" 
	["language"]=> string(5) "en-US" 
	["generator"]=> string(27) "http://wordpress.org/?v=4.0" 
	["copyright"]=> string(27) "2014 Â© Derechos reservados" 
	["managingEditor"]=> string(33) "dr_fausto@hotmail.com (MVS Radio)" 
	["webMaster"]=> string(33) "dr_fausto@hotmail.com (MVS Radio)" 
	["ttl"]=> string(4) "1440" 
	["image"]=> object(SimpleXMLElement)#2 (5) { 
		["url"]=> string(73) "http://www.sergiozurita.com/disparamargotdispara/imagenes/itunes2-144.jpg" 
		["title"]=> string(24) "Dispara, Margot, dispara" 
		["link"]=> string(44) "http://disparamargotdispara.sergiozurita.com" 
		["width"]=> string(3) "144" ["height"]=> string(3) "144" 
	} 
	["item"]=> array(30) { 
		[0]=> object(SimpleXMLElement)#3 (8) { 
			["title"]=> string(48) "Dispara, Margot, dispara: 17 de octubre del 2014" 
			["link"]=> string(60) "http://feedproxy.google.com/~r/disparamargot/~3/ib1xiI4ye0Q/" 
			["comments"]=> string(100) "http://disparamargotdispara.sergiozurita.com/dispara-margot-dispara-17-de-octubre-del-2014/#comments" 
			["pubDate"]=> string(31) "Fri, 17 Oct 2014 19:03:29 +0000" 
			["category"]=> object(SimpleXMLElement)#34 (0) { } 
			["guid"]=> string(52) "http://disparamargotdispara.sergiozurita.com/?p=1373" 
			["description"]=> object(SimpleXMLElement)#35 (0) { } 
			["enclosure"]

*/
?>