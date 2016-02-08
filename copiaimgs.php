<?php
ini_set("memory_limit","100M");
ini_set("max_execution_time",3600);

//definicion de directorios
$base = '/productos_copiados/';
$dirapp = $base . "sinopsis/";
$newdir = '/nfscluster/televisainternacional/uploads/';

if(is_dir($base)){
	//echo "Directorio encontrado.<br>";
	foreach (scandir($base) as $item) {
		// se leen los directorios
		if ($item <> '.' and $item <> '..' and $item <> 'Thumbs.db' ){
			$arr = explode("_", $item);
			$idprod = $arr[0];
			echo $idprod . "<br>";
			if($idprod<=180){
				if(is_dir($base.$item)){
					foreach (scandir($base.$item) as $item2) {
						if ($item2 <> '.' and $item2 <> '..' and $item2 <> 'Thumbs.db' ){
							if($item2=='6_fotos'){
								foreach (scandir($base.$item."/6_fotos/") as $item3) {
									if ($item3 <> '.' and $item3 <> '..' and $item3 <> 'Thumbs.db' ){
										echo $base.$item."/6_fotos/".$item3 . "<br>";
										$destiny = $newdir . $idprod . "/mat_prom/6/";
										if(!file_exists($destiny)){
											if(!mkdir($destiny,0777,true)) {
												echo "No se puede crear : " . $destiny . "<br>";
												exit();
											}
										}
										copy($base.$item."/6_fotos/".$item3, $destiny.$item3);
									}
								}
							}
						}
					}
				}
			}
		}
	}
} else {
}
?>