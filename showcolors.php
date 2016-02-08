<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta description="Admin de mapas" />
        <title>Colores</title>
        <style type="text/css">
        html,body, section,div, label { display: inline;float: left;position: relative;margin: 0;padding: 0; height: 100%;width: 100%;}
        div { color: #fff; height: auto; width: 96%; margin: 5px 2%; }
        label { text-align: center; margin: 10px 0;}
        </style> 
    </head>
	<body>
		<section>
<?php
/*
color font:
*/

$colores[] = array('color' => '19737b','total' => '1');
$colores[] = array('color' => '212121','total' => '1');
$colores[] = array('color' => '222','total' => '1');
$colores[] = array('color' => '31c7cf','total' => '1');
$colores[] = array('color' => '454545','total' => '1');
$colores[] = array('color' => '555','total' => '1');
$colores[] = array('color' => '666','total' => '1');
$colores[] = array('color' => '6d6d6d','total' => '1');
$colores[] = array('color' => '6f6f6f','total' => '1');
$colores[] = array('color' => '777','total' => '1');
$colores[] = array('color' => '7dd7dd','total' => '1');
$colores[] = array('color' => '818181','total' => '1');
$colores[] = array('color' => '828282','total' => '1');
$colores[] = array('color' => '919191','total' => '1');
$colores[] = array('color' => '929292','total' => '1');
$colores[] = array('color' => '989898','total' => '1');
$colores[] = array('color' => 'c9c9c9','total' => '1');
$colores[] = array('color' => 'd2d0d0','total' => '1');
$colores[] = array('color' => 'dbdbdb','total' => '1');
$colores[] = array('color' => 'e4e4e4','total' => '1');
$colores[] = array('color' => 'e5e5e5','total' => '1');
$colores[] = array('color' => 'ececec','total' => '1');
$colores[] = array('color' => 'ffffff','total' => '1');

/*
Background color :
*/
/*
$colores[] = array('color' => '007fd1','total' => '10');
$colores[] = array('color' => '10878d','total' => '20');
$colores[] = array('color' => '19737b','total' => '15');
$colores[] = array('color' => '222','total' => '5');
$colores[] = array('color' => '22adb7','total' => '2');
$colores[] = array('color' => '2fbdc5','total' => '8');
$colores[] = array('color' => '31c7cf','total' => '191');
$colores[] = array('color' => '333','total' => '3');
$colores[] = array('color' => '666','total' => '7');
$colores[] = array('color' => '6f6f6f','total' => '60');
$colores[] = array('color' => '828282','total' => '54');
$colores[] = array('color' => '929292','total' => '29');
$colores[] = array('color' => 'aaa','total' => '5');
$colores[] = array('color' => 'b0b0b0','total' => '22');
$colores[] = array('color' => 'b5b5b5','total' => '4');
$colores[] = array('color' => 'b9b9b9','total' => '2');
$colores[] = array('color' => 'bcbdb7','total' => '3');
$colores[] = array('color' => 'c7c7c7','total' => '1');
$colores[] = array('color' => 'c8c8c8','total' => '9');
$colores[] = array('color' => 'ccc','total' => '1');
$colores[] = array('color' => 'dadada','total' => '6');
$colores[] = array('color' => 'dedede','total' => '10');
$colores[] = array('color' => 'd2d0d0','total' => '2');
$colores[] = array('color' => 'dbdbdb','total' => '6');
$colores[] = array('color' => 'e2e2e2','total' => '11');
$colores[] = array('color' => 'ebebeb','total' => '10');
$colores[] = array('color' => 'e3e3e3','total' => '8');
$colores[] = array('color' => 'ededed','total' => '12');
$colores[] = array('color' => 'eeeeee','total' => '1');
$colores[] = array('color' => 'e5e5e5','total' => '8');
$colores[] = array('color' => 'e0e0e0','total' => '3');
$colores[] = array('color' => 'ececec','total' => '2');
$colores[] = array('color' => 'e4e5e5','total' => '4');
$colores[] = array('color' => 'f4f4f4','total' => '6');
$colores[] = array('color' => 'fef1ec','total' => '1');
$colores[] = array('color' => 'ffffff','total' => '3');
//$colores[] = array('color' => 'fff','total' => '146');
*/
$color = 'fff';
for ($i=0; $i < count($colores); $i++) { 
	$j=$i+1;
    if($colores[$i]['color']=='c9c9c9'){
        $color = 'aaa';
    }
	echo "<div style='color:#".$color.";background-color:#" . $colores[$i]['color'] . ";'><label>" . $colores[$i]['color'] 
    . "</label></div>";
}
?>
			
		</section>
	</body>
</html>