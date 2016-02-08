<?php 
//include_once('../televisainternacional/public/extras/funciones.php'); 
$url = "http://feeds.esmas.com/data-feeds-esmas/appjs/videos_tvsaint_total.js";
$contents = file_get_contents($url);
$contents = utf8_encode($contents);
$results = json_decode($contents, TRUE); 
//echo $_GET['id'] . "<BR>";
if(isset($_GET['id']) && strlen($_GET['id'])>0){
$j = $_GET['id']+1-1;
} else {
	$j=0;
}

$video = $results['items'][$j]['id'];
$brightcove_id = $results['items'][$j]['brightcove_id'];
$title = $results['items'][$j]['title'];
$total=count($results['items'])-1;
echo "Viendo: " . $j . " - " . $total . "<br>";
$videon = $j+1;
$videop = $j-1;
if($j>=$total){
	$videon = 0;
}
if($j<0){
	$videop = $total-1;
} else {
	if($j==0){
		$videop=$total;
	}
}
?>
<!doctype html>
<html lang="es">
    <head>
        <meta charset="ISO-9958-1" />
        <meta description="Mi sitio" />
        <title>Videos</title>
	    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script src="http://modernizr.com/downloads/modernizr-latest.js"></script>
		<link rel="stylesheet" type="text/css" href="http://necolas.github.io/normalize.css/3.0.0/normalize.css" />
        <style type="text/css">
        body. body * {display:inline;float: left;height: auto;margin: 0;padding: 0;position: relative; width:auto;}
        body section {display:inline;float: left;height: auto;margin: 0;padding: 0;position: relative; width:auto;}
        body section article {border: solid 1px #000; display:inline;float: left;height: auto; overflow: hidden; position: relative; width: 350px;}
        body section article iframe#videoframe { height: 310px; width: 350px; }
        body section article ul {display:inline;float: left;height: auto;left: 0; margin: 0;padding: 0;position: relative; width: 100%;}
        body section article ul li {display:inline;float: left;height: auto;list-style: none; margin: 3px;padding: 0;position: relative;width: 100%;}
        body section article ul li.optn { text-align: center; width: 48%; }
        body section select { height: 30px; width: 350px; }
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
				<iframe src="http://amp.televisa.com/embed/embed_internacional.php?id=<?php echo $video?>" class="videoframe" id="videoframe" name="videoframe" scrolling="no" frameborder="0"></iframe>
				<ul>
					<li id="">j: <?php echo $j;?></li>
					<li id="">ID: <?php echo $video;?></li>
					<li id="">BR: <?php echo $brightcove_id;?></li>
					<li id="">Titulo: <?php echo $title;?></li>
					<li id="prev" class="optn"><a href="./videoplayer.php?id=<?php echo $videop?>">
						<img src="http://www.yorch3004.herobo.com/imgs/flecha-gris-left.png">
					</a></li>
					<li id="next" class="optn"><a href="./videoplayer.php?id=<?php echo $videon?>">
						<img src="http://www.yorch3004.herobo.com/imgs/flecha-gris-right.png">
					</a></li>
				</ul>
			<select>
				<?php
				for ($s=0; $s <= $total; $s++) { 
					$svideo = $results['items'][$s]['id'];
					$sbrightcove_id = $results['items'][$s]['brightcove_id'];
					$stitle = $results['items'][$s]['title'];
					$cad = $s . "- " . $svideo . " - ". $sbrightcove_id . " - " . $stitle;
					echo '<option value="'.$s.'">'.$cad.'</option>';
				}
				?>
			</select>
			</article>
		</section>
		<section>
		</section>
		<footer>
		</footer>
	</body>
</html>