<?php include_once('../televisainternacional/public/extras/funciones.php'); 
function traepaises(){
	$sqlr = "SELECT * FROM paises p where clave>0;";
	$resultadosr= mysql_query($sqlr);
	return $resultadosr;
}
Conectar();

?>
<!doctype html>
<html lang="es">
    <head>
        <meta charset="ISO-9958-1" />
        <meta description="Mi sitio" />
        <title>Banderas</title>
		<script src="../librarys/jquery-1.10.2.min.js"></script>
		<script src="../librarys/modernizr.js"></script>
		<link rel="stylesheet" type="text/css" href="../librarys/normalize.css" />
        <style type="text/css">
        body. body * {display:inline;float: left;height: auto;margin: 0;padding: 0;position: relative; width:auto;}
        body section {}
        body section article {border: solid 1px #000; display:inline;float: left;height: auto; overflow: auto; position: relative; width: 100%;}
        body section article ul {display:inline;float: left;height: auto;left: 0; margin: 0;padding: 0;position: relative; width: 100%;}
        body section article ul li {display:inline;float: left;height: 120px;list-style: none; margin: 3px;padding: 0;position: relative;width: 120px;}
        body section article ul li label {background: #aaa; bottom: 0;color: white; display:block;float: left;height: auto;margin: 0;opacity: 0.7; 
        		padding: 0 2% 0 0; position: absolute; text-align: right; width: 98%;}
        body section article ul li img {-moz-border-radius: 0px;-o-border-radius: 0px;-webkit-border-radius: 0px;border-radius: 0px;height: 64px; width: 64px;}
        </style>
        <script type="text/javascript">
        $(function(){
        });
        </script>
    </head>
	<body>
		<header>
		</header>
		<section>
			<article>
				<ul>
					<?php
					$resultadosr = traepaises();
					$cuantosr = mysql_num_rows($resultadosr);
					$resultador = 0;
					while($datar = mysql_fetch_array($resultadosr))
					{
						$image = "flags/". $datar['country_code'].".png";
						if(!file_exists($image)){
							echo "Falta: " . $image . " - " . $datar['description_es'] . "<br>";
						} else {
							//copy($image,"flags2/". $datar['country_code'].".png");
						}
						/*echo "<li><img src='" . $image . "' border='0' width='64' height='64' /><label>" 
							. $datar['country_code'] . "->" . $datar['description_es'] . "</label></li>";*/
					}
					mysql_free_result($resultadosr);
					?>
				</ul>
			</article>
		</section>
		<footer>
		</footer>
	</body>
</html>