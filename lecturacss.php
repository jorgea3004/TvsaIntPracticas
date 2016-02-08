<?php
$url = "../televisainternacional/public/stylesheets/css/";
$cadena = "border:";
$cadena2 = "#";
$colores = array();

if(file_exists($url)){
	$directorio = opendir($url); //ruta actual
	while ($archivo = readdir($directorio))
	{
		if($archivo!= "." && $archivo!= ".." && $archivo!= "thumb.db"  && $archivo!= "slide-vertical"  && $archivo!= "autocomplete"){
			echo $archivo . "<br>";
			$fichero_url = fopen ($url . $archivo, "r");
			$linea=1;
			while ($trozo = fgets($fichero_url, 1024)){
				$trozo = trim($trozo);
				$pos1 = stripos($trozo, $cadena);
				$pos2 = stripos($trozo, $cadena2);
				if ($pos1 !== false && $pos2 !== false) {
					echo $trozo . "<br>";
					$pos = strripos($trozo, $cadena);
					//echo "pos: " . $pos . "<br>";
					$subcadena1 = substr($trozo, $pos);
					//echo "subcadena1: " . $subcadena1 . "<br>";
					$pos2 = strpos($subcadena1, ';');
					//echo "pos2: " . $pos2 . "<br>";
					$subcadena2 = substr($subcadena1, 0, $pos2);
					$pos3 = stripos($subcadena2, $cadena2);
					if ($pos3 !== false) {
						$subcadena2 = str_replace($cadena, "", trim($subcadena2));
						$subcadena2 = str_replace($cadena2, "", trim($subcadena2));
						$subcadena2 = strtolower(trim($subcadena2));
						//echo "subcadena2: " . $subcadena2 . "<br>";
						$exist = false;
						if(count($colores)>0){
							foreach ($colores as $key => $value) {
								if($key==$subcadena2) {
									$colores[$subcadena2] = $value+1;
									$exist = true;
								}
							}
							if($exist == false){
								$colores[$subcadena2]=1;
							}
						} else {
							$colores[$subcadena2]=1;
						}
						//exit();
					}
				}
				$linea++;
			}
			echo "<br>";
		}
	}
}
/*$i=1;
foreach ($colores as $key => $value) {
	//echo $i . ".- " . $key."=>".$value . "<br>";
	echo $key . "<br>";
	$i++;
}
*/

/*$colores[] = 'e2e2e2';
$colores[] = '929292';
$colores[] = 'bcbdb7';
$colores[] = 'b5b5b5';*/
//$colores[] = '31c7cf'; 
/*$colores[] = 'ebebeb';
$colores[] = 'e3e3e3';
$colores[] = '828282';
$colores[] = 'ffffff';
$colores[] = 'fff';
$colores[] = 'aaaaaa';
$colores[] = 'aaa';
$colores[] = '2fbdc5';
$colores[] = '19737b';
$colores[] = '10878d';
$colores[] = 'ededed';
$colores[] = '22adb7';
$colores[] = 'eeeeee';
$colores[] = 'f4f4f4';
$colores[] = 'fef1ec';
$colores[] = '007fd1';
$colores[] = 'e5e5e5';
$colores[] = 'e0e0e0';
$colores[] = '333';
$colores[] = 'ececec';
$colores[] = 'b9b9b9';
$colores[] = 'e4e5e5';
$colores[] = 'dadada';
$colores[] = '6f6f6f';
$colores[] = 'dedede';
$colores[] = 'c7c7c7';
$colores[] = 'c8c8c8';
$colores[] = 'b0b0b0';
$colores[] = '666';
$colores[] = 'ccc';
$colores[] = 'd2d0d0';
$colores[] = '222';
$colores[] = 'dbdbdb';*/
/*
$elemcss = array();
$cadena2 = "background:";

for ($i=0; $i < count($colores); $i++) { 
	$total=0;
	$cadena = "#".$colores[$i];
	//echo "Color: " . $cadena . "<br><br>";
	if(file_exists($url)){
		$directorio = opendir($url); //ruta actual
		while ($archivo = readdir($directorio))
		{
			if($archivo!= "." && $archivo!= ".." && $archivo!= "thumb.db"  && $archivo!= "slide-vertical"  && $archivo!= "autocomplete"){
				//echo $archivo . "<br>";
				$fichero_url = fopen ($url . $archivo, "r");
				$linea=1;
				while ($trozo = fgets($fichero_url, 1024)){
					$trozo = trim($trozo);
					$pos1 = stripos($trozo, $cadena);
					$pos2 = stripos($trozo, $cadena2);
					if ($pos1 !== false && $pos2 !== false) {
						//echo $archivo . " - " . $linea . " => " . $trozo . "<br>";
						//echo $trozo . "<br>";
						$posd = explode("{", $trozo);
						$elemcss[] = $posd[0];
						//echo $posd[0] . "{".$cadena2."".$cadena." !important;}<br>";
						$total++;
					}
					$linea++;
				}
			}
		//echo "<br>";
		}
	}
	//echo "colores[] = array('color' => '" . $colores[$i] . "','total' => '" . $total . "');<br>";
	if(count($elemcss)>0){
		$elemcss = array_values(array_unique($elemcss));
		for ($i=0; $i < count($elemcss); $i++) { 
			echo "" . $elemcss[$i] . "{".$cadena2."".$cadena." !important;}<br>";
		}
	}
}
*/

?>