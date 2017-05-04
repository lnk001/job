<?php
$file = __DIR__.'/../max_num';
if(!is_file($file) || date('j',filemtime($file)) < date('j'))
{
	$max = 3;
	for($i=0;$i<9;$i++)
		$max .= mt_rand(0,9);
	file_put_contents($file,$max);
}
else
	$max = (float) file_get_contents($file);
$seconds = time()-strtotime(date('Y-m-d'));
$hour = date('G');
if($hour < 7)
	$persent = 0.2 * ($seconds/(6*3600));
else if($hour < 19)
	$persent = 0.2 + 0.6 * (($seconds-6*3600)/(12*3600));
else
	$persent = 0.8 + 0.2 * (($seconds-18*3600)/(6*3600));
$bid = floor($max*$persent);
$user = floor($bid/5.5);
$arr['bid'] = number_format($bid); 
$arr['user'] = number_format($user);
echo json_encode($arr);
