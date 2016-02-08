<?php include_once('../televisainternacional/public/extras/funciones.php');
Conectar();
$page = $_GET['page'];
$limit = $_GET['limit'];
	$inicio = ($page * $limit) - $limit;
	$sql = "SELECT c.id as idactor, c.name as actor, t.image as foto, t.id_product as prod "
		. "FROM cat_actors c left join ("
		. "SELECT image, id_cat_actors, id_product "
		. "FROM cast c order by id_product desc "
		. ") t on t.id_cat_actors=c.id "
		. "where length(name)>2 and name like 'h%' "
		. "group by idactor order by name asc, idactor asc,t.id_product desc limit ".$inicio . ",".$limit.";";
	$res = mysql_query($sql);
	if(mysql_num_rows($res)>0){
		while($datar = mysql_fetch_array($res))
		{
			if(strlen($datar['prod'])>0 && strlen($datar['foto'])>0){
				$image = "http://www.televisainternacional.tv/uploads/". $datar['prod']."/imgs/" . $datar['foto'];
			} else {
				$image='http://www.televisainternacional.tv/uploads/thumb_gral.jpg';
			}
			echo "<li><img src='" . $image . "' border='0' width='120' height='120' /><label>" . $datar['actor'] . "</label></li>";
		}
		//echo $sql;
		mysql_free_result($res);
	}
?>