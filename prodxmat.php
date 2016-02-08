<?php 
include_once('../televisainternacional/public/extras/funciones.php'); 

$arrg[]='Escrito en el cuerpo de la noche,210,6,,,,';
$arrg[]='Loco fin de semana,215,6,,,,';
$arrg[]='Una de dos,214,6,,,,';
$arrg[]='Bailando por la boda,186,6,,,,';
$arrg[]='Bailando por un sueno,159,6,,,,';
$arrg[]='Trece Miedos,204,6,5,,3,4';
$arrg[]='Mujer casos de la vida real,125,6,5,2,3,4';
$arrg[]='Cantando por un sueno,165,6,,,,';
$arrg[]='Los 5 Magnificos,205,6,,,,';
$arrg[]='En busca de,300,6,,,,';
$arrg[]='La casa de la risa,44,6,,,,';
$arrg[]='Los Perplejos,154,6,,,,';
$arrg[]='Que madre tan padre,245,6,,,,';
$arrg[]='La Parodia,47,6,5,,3,';
$arrg[]='Rbd la familia,195,6,,,,';
$arrg[]='Abrazame muy fuerte,20,6,,,,';
$arrg[]='Alborada,157,6,5,2,,';
$arrg[]='Alebrijes y rebujos,67,6,,,,';
$arrg[]='Amar otra vez,97,6,5,2,,';
$arrg[]='Amar sin limites,183,6,5,2,,';
$arrg[]='Amigas y rivales,2,6,5,2,,';
$arrg[]='Amigos por siempre,3,6,,,,';
$arrg[]='Amy la nina de la mochila,99,6,5,2,,';
$arrg[]='Apuesta por un amor,121,6,5,2,,';
$arrg[]='Asi son ellas,15,6,5,2,,';
$arrg[]='Atrevete a olvidarme,4,6,5,2,,';
$arrg[]='Aventuras en el tiempo,5,6,,,,';
$arrg[]='Bajo las riendas del amor,190,6,5,2,,';
$arrg[]='Barrera del amor,158,6,5,2,,';
$arrg[]='Carita de angel,6,6,,,,';
$arrg[]='Clap,80,6,5,2,,';
$arrg[]='Codigo postal,177,6,5,2,,';
$arrg[]='Complices al rescate,9,6,5,2,,';
$arrg[]='Contra viento,131,6,5,,,';
$arrg[]='Corazones al limite,100,6,5,2,,';
$arrg[]='De pocas pulgas,49,6,,2,,';
$arrg[]='Duelo de pasiones,176,6,5,2,,';
$arrg[]='El derecho de nacer,27,6,5,2,,';
$arrg[]='El juego de la vida,7,6,5,2,,';
$arrg[]='El manantial,8,6,5,2,,';
$arrg[]='El noveno mandamiento,28,6,5,2,,';
$arrg[]='El privilegio de amar,74,6,,,,';
$arrg[]='Entre el amor y el odio,1,6,5,2,,';
$arrg[]='Forever,110,6,,,,';
$arrg[]='Inocente de ti,122,6,5,,,';
$arrg[]='La casa en la playa,24,6,5,2,,';
$arrg[]='La duena,98,6,,,,';
$arrg[]='La intrusa,17,6,5,2,,';
$arrg[]='La mentira,71,6,,,,';
$arrg[]='La fea mas bella,163,6,5,2,,';
$arrg[]='La verdad oculta,164,6,5,2,,';
$arrg[]='Las dos caras de Ana,182,6,5,2,,';
$arrg[]='Locura de amor,22,6,,,,';
$arrg[]='Lola erase una vez,189,6,5,2,,';
$arrg[]='Maria belen,18,6,5,2,,';
$arrg[]='Maria Mercedes,48,6,,,,';
$arrg[]='Mariana de la noche,82,6,5,2,,';
$arrg[]='Marimar,36,6,,,,';
$arrg[]='Mision sos,118,6,5,2,,';
$arrg[]='Muchachitas como tu,206,6,5,2,,';
$arrg[]='Mujer bonita,31,6,5,2,,';
$arrg[]='Mujer de madera,109,6,5,2,,';
$arrg[]='Mundo de fieras,178,6,5,2,,';
$arrg[]='Navidad sin fin,29,6,5,2,,';
$arrg[]='Nina amada mia,34,6,5,2,,';
$arrg[]='Mi pequena traviesa,101,6,,,,';
$arrg[]='Ramona,30,6,,,,';
$arrg[]='Rayito de luz,33,6,,,,';
$arrg[]='Rubi,112,6,5,,,';
$arrg[]='Salome,10,6,5,2,,';
$arrg[]='Pablo y Andrea,153,6,5,2,,';
$arrg[]='Piel de otono,116,6,5,2,,';
$arrg[]='Por un beso,25,6,5,2,,';
$arrg[]='Primer amor a mil por hora,26,6,5,2,3,4';
$arrg[]='Sin pecado concebido,23,6,5,2,,';
$arrg[]='The Guilt,96,6,,,,';
$arrg[]='Yo amo a Juan Querendon,181,6,5,2,,';
$arrg[]='Rencor Apasionado,72,6,,,,';
$arrg[]='Suenos y caramelos,132,6,5,2,,';
$arrg[]='Velo de novia,61,6,5,2,,';
$arrg[]='Verano de amor,278,6,,,,';
$arrg[]='El amor no tiene precio,150,6,5,2,,';
$arrg[]='Locas de amor (Argentina),286,6,,,,';
$arrg[]='Suena conmigo,364,6,,2,3,4';
$arrg[]='Quien eres tu,562,6,,,,';
$arrg[]='Rebelde Rio,540,6,5,2,3,';





Conectar();

$dir = '/productos/';
/*for($a=0; $a<count($arrg); $a++){
	$param = $arrg[$a];
	$aparam = explode(',',$param);
	$aparam[0] = str_replace(" ", "_", $aparam[0]);
	$prod = $aparam[1] . "_" . $aparam[0];
	echo $prod . "<br>";
	if(!file_exists($dir.$prod)) {
		if(!mkdir($dir.$prod,0777,true)){
			echo "No se pudo crear: ". $dir . $prod."<br>";
		}
	}
	for($b=2; $b<count($aparam); $b++){
		if(strlen($aparam[$b])>0){
			$sdir = '';
			if($aparam[$b]==2){ $sdir = $aparam[$b] . "_folleto"; }
			if($aparam[$b]==3){ $sdir = $aparam[$b] . "_logo"; }
			if($aparam[$b]==4){ $sdir = $aparam[$b] . "_poster"; }
			if($aparam[$b]==5){ $sdir = $aparam[$b] . "_prensa"; }
			if($aparam[$b]==6){ $sdir = $aparam[$b] . "_fotos"; }
			echo "- " . $sdir . "<br>";
			if(!file_exists($dir.$prod."/".$sdir)) {
				if(!mkdir($dir.$prod."/".$sdir,0777,true)){
					echo "No se pudo crear: ".$dir.$prod."/".$sdir."<br>";
				}
			}
		}
	}
}*/
//sort($arrg);
/*for($a=0; $a<count($arrg); $a++){
	$param = $arrg[$a];
	$aparam = explode(',',$param);
	$aparam[0] = str_replace(" ", "_", $aparam[0]);
	$prod = $aparam[1];
	$dets = array();
	for($b=2; $b<count($aparam); $b++){
		if(strlen($aparam[$b])>0){
			$dets[] =$aparam[$b];
		}
	}
	$mat='';
	if(count($dets)>0){
		$mat = implode(",", $dets);
	}
	$sql = 'select * from promotional_material '
		. 'where id_product='.$prod.' and id_cat_material_type in ('.$mat.') '
		. 'order by id_product asc, id asc;';
	$res = mysql_query($sql);
	$cuantosr = mysql_num_rows($res);
	while($data = mysql_fetch_array($res))
	{
		if(strlen($data['file'])>0){
			//echo "" . $data['id_product'] . " - " . $data['id'] . "<br>";
			echo "http://www.televisainternacional.tv/uploads/" . $data['id_product'] 
			. "/mat_prom/" . $data['id_cat_material_type'] . "/". $data['file'] . "<br>";
		}
	}
	mysql_free_result($res);
}*/

/*$elemn = implode(",", $prods);
$sql='select * from promotional_material where id_cat_material_type=6 and id_product in ('.$elemn.') and id_product>5 order by id_product asc, id asc;';
$res = mysql_query($sql);
$cuantosr = mysql_num_rows($res);
while($data = mysql_fetch_array($res))
{
	//echo "" . $data['id_product'] . " - " . $data['id'] . "<br>";
	echo "http://www.televisainternacional.tv/uploads/" . $data['id_product'] . "/mat_prom/" . $data['id_cat_material_type'] . "/". $data['file'] . "<br>";
}
mysql_free_result($res);*/

$dir = '/productos_copiados/';

/*for($a=0; $a<count($arrg); $a++){
	$param = $arrg[$a];
	$aparam = explode(',',$param);
	$aparam[0] = str_replace(" ", "_", $aparam[0]);
	$prod = $aparam[1];
	$prodc = $aparam[1] . "_" . $aparam[0];
	if($prod>100){
		//echo $prodc . "<br>";
		$dets = array();
		for($b=2; $b<count($aparam); $b++){
			if(strlen($aparam[$b])>0){
				if($aparam[$b]==5){ $mt = "5,8"; }else {$mt=$aparam[$b];}
				$dets[] =$mt;
			}
		}
		$mat='';
		if(count($dets)>0){
			$mat = implode(",", $dets);
		}
		$sql = 'select * from promotional_material '
			. 'where id_product='.$prod.' and id_cat_material_type in ('.$mat.') '
			. 'order by id_product asc, id asc;';
		$res = mysql_query($sql);
		$cuantosr = mysql_num_rows($res);
		while($data = mysql_fetch_array($res))
		{
			if(strlen($data['file'])>0){

				$sdir = '';
				if($data['id_cat_material_type']==2){ $sdir = $data['id_cat_material_type'] . "_folleto"; }
				if($data['id_cat_material_type']==3){ $sdir = $data['id_cat_material_type'] . "_logo"; }
				if($data['id_cat_material_type']==4){ $sdir = $data['id_cat_material_type'] . "_poster"; }
				if($data['id_cat_material_type']==5 || $data['id_cat_material_type']==8){ $sdir = "5_prensa"; }
				if($data['id_cat_material_type']==6){ $sdir = $data['id_cat_material_type'] . "_fotos"; }
				//echo $prodc . "/" . $sdir . "/" . $data['file'] . "<br>";
				$ffile = $dir.$prodc . "/" . $sdir . "/" . $data['file'];
				if(!file_exists($ffile)){
					echo $aparam[0] . " - " . $data['id_cat_material_type'] . " - " . $data['name'] . "<br>";
				}
			}
		}
		mysql_free_result($res);
	}
}*/

foreach (scandir($dir) as $item) {
	if ($item <> '.' and $item <> '..' and $item <> 'Thumbs.db'){
		$aa = explode("_", $item);
		$pd = $aa[0];
		$dir2 = $dir . $item;
		//echo $item . " - " . $pd . "<br>";
		foreach (scandir($dir2) as $item2) {
			if ($item2 <> '.' and $item2 <> '..' and $item2 <> 'Thumbs.db'){
				//echo "" . $item . " - " . $item2 . "<br>";
				$bb = explode("_", $item2);
				if($bb[0]==5){ $mt = "in (5,8)"; } else { $mt = "=" . $bb[0]; }
				$sql='select * from promotional_material where id_cat_material_type '.$mt.' and id_product ='.$pd.';';
				$res = mysql_query($sql);
				$cuantos = mysql_num_rows($res);
				if($cuantos==0){
					echo "No existe material: " . $item . " - " . $item2 . "<br>";
					//echo "" . $sql. "<br>";
				}
			}
		}
	}
}

?>