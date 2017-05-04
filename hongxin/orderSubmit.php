<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

require_once(__DIR__.'/../vendor/autoload.php');

define('SMS_REG', '101100-WEB-HUAX-033306');
define('SMS_PWD', 'OKPKMEGQ');

class User
{
    public $cache = null;
    public $keys = ['name', 'mobile', 'goods', 'advertiserid', 'ordernum', 'price', 'num', 'amount', 'address', 'siteid'];
    public $attributes = [];

	public function __construct()
	{
        $this->cache = new Predis\Client('tcp://10.4.3.201:6379', ['prefix'=>'eshop:']);

		$this->goodid = $this->getPost('goodsid');

        foreach($this->keys as $key)
            $this->attributes[$key] = $this->getPost($key);
		$this->attributes['createtime'] = date('Y-m-d H:i:s');
	}

	public function save()
	{
		$key = $this->attributes['mobile'].'--'.$this->attributes['advertiserid'];
        if($this->cache->hexists('eshop_phone', $key))
			throw new Exception('您已经提交过订单了', 1);
        $this->cache->pipeline(function($pipe) use ($key){
            $pipe->hset('eshop_phone', $key, 1);
            $pipe->rpush('eshop', join('#||#', $this->attributes));
        });
		if($this->getPost('sms', 0))
		 	$this->sendSms();
	}

	public function sendSms()
	{
		session_start();
		$name = $this->getPost('name');
		$phone = $this->attributes['mobile'];
		$goods = $this->attributes['goods'];
		if(!isset($_SESSION['sms_'.$phone]) || $_SESSION['sms_'.$phone] + 300 < time())
			$_SESSION['sms_'.$phone] = time();
		else
			throw new Exception('短信已发送', 2);
		$content = "亲爱的{$name}，您刚购买的{$goods}订单已经生成，我们的美女客服将尽快与您电话确认订单信息！放心购物，货到付款。如有疑问，请致电：0595-22280101 【贝踏】";
		$qs = http_build_query(array('reg'=>SMS_REG, 'pwd'=>SMS_PWD, 'sourceadd'=>'', 'phone'=>$phone, 'content'=>$content));
		$ch = curl_init('http://www.stongnet.com/sdkhttp/sendsms.aspx?'.$qs);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		parse_str(curl_exec($ch), $rs);
		curl_close($ch);
		if($rs['result'] != 0)
			throw new Exception('短信发送失败('.$rs['message'].')', 2);
	}

	public function getPost($key, $defaultValue=null)
	{
		return isset($_POST[$key]) ? $_POST[$key] : $defaultValue;
	}
}

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	try
	{
		$user = new User;
		$user->save();
		echo json_encode(array('status'=>0));
	}
	catch(Throwable $e)
	{
		echo json_encode(array('status'=>$e->getCode() ?: 1, 'msg'=>$e->getMessage()));
	}
}
else
{
	$user = new User;
	echo $user->cache->llen('eshop');
}
