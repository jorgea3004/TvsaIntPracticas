<?php 
include_once('../televisainternacional/public/extras/funciones.php'); 
function actorsTot(){
	$sqlr = "SELECT c.id as idactor, c.name as actor, t.image as foto, t.id_product as prod "
		. "FROM cat_actors c left join ("
		. "SELECT image, id_cat_actors, id_product "
		. "FROM cast c order by id_product desc "
		. ") t on t.id_cat_actors=c.id "
		. "where length(name)>2 and name like 'h%' "
		. "group by idactor order by name asc, idactor asc,t.id_product desc;";
	$resultadosr= mysql_query($sqlr);
	return mysql_num_rows($resultadosr);
}
function actorsByPage($page,$limit){
	$inicio = ($page * $limit) - $limit;
	$sqlr = "SELECT c.id as idactor, c.name as actor, t.image as foto, t.id_product as prod "
		. "FROM cat_actors c left join ("
		. "SELECT image, id_cat_actors, id_product "
		. "FROM cast c order by id_product desc "
		. ") t on t.id_cat_actors=c.id "
		. "where length(name)>2 and name like 'h%' "
		. "group by idactor order by name asc, idactor asc,t.id_product desc limit ".$inicio . ",".$limit.";";
	return mysql_query($sqlr);
}
Conectar();
$itemsini = 10;
$itemsinisz = $itemsini*126;

$tot = actorsTot();
$res = $tot / 5;
$nums = explode(".", $res);
$ent = $nums[0];
if (isset($nums[1])) {
	$dec = $nums[1];
	if($dec > 0) {$ent = $ent + 1;}
}
$total = $ent;
$totancho = (-1) * ($tot * 126);


?>
<!doctype html>
<html lang="es">
    <head>
        <meta charset="ISO-9958-1" />
        <meta description="Mi sitio" />
        <title>Actores</title>
		<script src="../librarys/jquery-1.10.2.min.js"></script>
		<script src="../librarys/modernizr.js"></script>
		<link rel="stylesheet" type="text/css" href="../librarys/normalize.css" />
        <style type="text/css">
        body. body * {display:inline;float: left;height: auto;margin: 0;padding: 0;position: relative; width:auto;}
        body section {}
        body section article {border: solid 1px #000; display:inline;float: left;height: 150px; overflow: auto; position: relative; width: 660px;}
        body section article ul {display:inline;float: left;height: auto;left: 0; margin: 0;padding: 0;position: relative; width: <?php echo $itemsinisz;?>px;}
        body section article ul li {display:inline;float: left;height: 120px;list-style: none; margin: 3px;padding: 0;position: relative;width: 120px;}
        body section article ul li label {background: #aaa; bottom: 0;color: white; display:block;float: left;height: auto;margin: 0;opacity: 0.7; 
        		padding: 0 2% 0 0; position: absolute; text-align: right; width: 98%;}
        body section article ul li img {-moz-border-radius: 10px;-o-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;height: 120px; width: 120px;}
        @media screen and (max-width:660px){
	        body section article { width: 100%;}
        }
        </style>
        <script type="text/javascript">
        $(function(){
        	var p = $('body section article');
				var obj = $('section article ul');
	        	var diff = obj.width()-p.width();
        	$('body section article').scroll(function () {
	        	if(p.scrollLeft()==diff){
					var pagina = parseInt($('section article input#inxtact').val());
					var paginan = pagina + 1;
					var tnxtact = <?php echo $total;?>;
					if(paginan<=tnxtact) {
						$.ajax({
							url:'index_actores_query.php?page='+paginan+'&limit=5',
							type:"GET",
							data:'',
							contentType:"html; charset=ISO-9958-1;",
							dataType:"html",
							success: function(dataa){
								obj.append(dataa);
								var ancho = obj.find('li').length * 126;
								$('section article ul').css({'width':ancho});
				        		p.scrollLeft(diff);
								$('section article input#inxtact').val(paginan);
								diff = obj.width()-p.width();
							}
						});
					}
				}
        	});
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
					$resultadosr = actorsByPage(1,$itemsini);
					$cuantosr = mysql_num_rows($resultadosr);
					$resultador = 0;
					while($datar = mysql_fetch_array($resultadosr))
					{
						if(strlen($datar['prod'])>0 && strlen($datar['foto'])>0){
							$image = "http://www.televisainternacional.tv/uploads/". $datar['prod']."/imgs/" . $datar['foto'];
						} else {
							$image='http://www.televisainternacional.tv/uploads/thumb_gral.jpg';
						}
						echo "<li><img src='" . $image . "' border='0' width='120' height='120' /><label>" . $datar['actor'] . "</label></li>";
					}
					mysql_free_result($resultadosr);
					?>
				</ul>
				<input type="hidden" id="inxtact" name="inxtact" value="2" />
			</article>
		</section>
		<footer>
		</footer>
	</body>
</html>