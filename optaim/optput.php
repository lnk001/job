<?php
if (!function_exists('hex2bin')) {
    function hex2bin($data) {
        static $old;
        if ($old === null) {
            $old = version_compare(PHP_VERSION, '5.2', '<');
        }
        $isobj = false;
        if (is_scalar($data) || (($isobj = is_object($data)) && method_exists($data, '__toString'))) {
            if ($isobj && $old) {
                ob_start();
                echo $data;
                $data = ob_get_clean();
            }
            else {
                $data = (string) $data;
            }
        }
        else {
            trigger_error(__FUNCTION__.'() expects parameter 1 to be string, ' . gettype($data) . ' given', E_USER_WARNING);
            return;//null in this case
        }
        $len = strlen($data);
        if ($len % 2) {
            trigger_error(__FUNCTION__.'(): Hexadecimal input string must have an even length', E_USER_WARNING);
            return false;
        }
        if (strspn($data, '0123456789abcdefABCDEF') != $len) {
            trigger_error(__FUNCTION__.'(): Input string must be hexadecimal string', E_USER_WARNING);
            return false;
        }
        return pack('H*', $data);
    }
}


if (!isset($_COOKIE["zuid"])){
    $uid = UID();
    setcookie("zuid", $uid, time()+3600*24*365*2,'/','.hwei.com');
}else{
    $uid = $_COOKIE["zuid"];
}
$path = '/opt/zyz/uid/';
$file = get_file_name();


$optput = @$_REQUEST['optput']==1?0:1;

file_put_contents($path.$file,$uid."\t".$optput."\n",FILE_APPEND);


function UID(){
    $gid = trim(guid(), '{}');
    $gid = explode('-',$gid);
    $uid = $gid['0'].$gid['3'].$gid['4'];
    $uid = hex2bin($uid);
    $uid = base64_encode($uid);
    $uid = strtr($uid,array('+'=>'-','/'=>'_'));
    return $uid;
}
function guid(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12)
            .chr(125);// "}"
        return $uuid;
    }
}
function get_file_name(){
    $path = '/opt/zyz/uid/';
    $tmp = 'uid_'.date('YmdH',time());
    $mydir=dir($path);
    while($file=$mydir->read()){
        if(strpos($file,$tmp)!==false){
            return $file;
        }
    }
    return 'uid_'.date('YmdHi',time());
}
?>
