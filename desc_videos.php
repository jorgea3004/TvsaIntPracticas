<?php 
include_once('../televisainternacional/public/extras/funciones.php'); 
Conectar();
$sql='select * from video where id>1000;';
$res = mysql_query($sql);
$cuantos = mysql_num_rows($res);
if($cuantos>0){
	while($data = mysql_fetch_array($res)){
		$title = strtolower($data['title_es']);
		$titlea='';
		if (strpos($title,'cap') !== false) {
			$title = str_replace("cap.", "", $title);
			$titlea = explode(" ", $title);
			$titlea = array_filter($titlea);
			$cad='';
			for ($i=2; $i <= count($titlea); $i++) { 
				$cad.=$titlea[$i]." ";
			}
			/*foreach ($titlea as $key => $value) {
				//echo ".-".$value . "<br>";
				if(!is_integer($value)){
					$cad.=$value." ";
				}
			}*/
		}
		echo $data['id'] . "->" .$data['title_es']. " -> " . $cad . "<br>";

	}
}

?>