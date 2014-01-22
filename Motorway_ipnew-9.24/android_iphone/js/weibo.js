
function openweibo(){
	
	if(localStorage.token!=null && localStorage.t1!=null){
		var t2 = new Date();
			//alert(t2);
		localStorage.t2 = t2.getTime();
			//alert(localStorage.t2);
		var t = (localStorage.t2 - localStorage.t1)/100;
		t = parseInt(t, 10);
			//alert("time:"+t);
			//alert("exp:"+localStorage.exp);
		if(t<localStorage.exp){
				//alert(localStorage.exp);
			var param = localStorage.src;
			setTimeout(function(){
    					uexWindow.open("share","0",param,"2","0","0","0");
    				},1000);
		}else{
			openLoginWindow();
		}
	}else{
		openLoginWindow();
	}

}//openweibo

function onOAuth(winNam,url)
{
	if(winNam == "sinaLoginWin")//2.判断此时为授权页面
	{
		if(url.indexOf("http://www.moodlike.com/tiaozhuan/index.html#access_token")==0)//判断回调页正确，indexOf从第一个字符开始匹配字符串
		{
			var t = new Date();
				//alert(t);
			localStorage.t1 = t.getTime();
				//alert(localStorage.t1);
			var key=url.match(/http:\/\/www.moodlike.com\/tiaozhuan\/index.html#access_token=(.*)&remind_in=(.*)&expires_in=(.*)&uid=(.*)/);//获得key数组
			uexWindow.evaluateScript("sinaLoginWin","0",'uexWindow.toast("0","5","成功登陆新浪微博!",3000);');
			//var param="share.html?token="+key[1]+"&exp="+key[2]+"&uid="+key[3];//通过url给main.html传值
				//alert(url);
			localStorage.token = key[1];//token
				//alert("222");
			localStorage.exp   = key[2];//过期时间
				//alert(localStorage.exp);
			localStorage.uid   = key[3];//uid
			uexWindow.closeToast();
			var param = localStorage.src;//share.html?src=wgtRes/xxxx.jpg
			localStorage.removeItem('src');
			setTimeout(function(){
    					uexWindow.open("share","0",param,"2","0","0","0");},1000);	
    	}
		else if(url.indexOf("http://www.moodlike.com/tiaozhuan/index.html#error")==0){
			var key=url.match(/http:\/\/www.moodlike.com\/tiaozhuan\/index.html#error(.*)&error_code=(.*)/);
			//alert(key[2]);
			uexWindow.closeToast();
//			switch(key[2]){
//				case "21330":
//					//uexWindow.close(0);
//					//alert(key[2]);
//					window.location.href = localStorage.thispage;
//					//alert("222");
//					//uexWindow.windowBack(0);
//					break;
//				case "21327":
//					openLoginWindow();
//					break;
//			}
			
		}
	}
}

function openLoginWindow()//1.首先启动LoginWidow
{
	uexWindow.onOAuthInfo=onOAuth;
 	uexWindow.toast("0","5","正在加载新浪微博登陆窗口!",0);//弹出消息提示
 	uexWindow.open("sinaLoginWin","0","https://api.weibo.com/oauth2/authorize?client_id=3609623794&response_type=token&redirect_uri=http://www.moodlike.com/tiaozhuan/index.html&display=wap2.0",
    			"2","0","0","1");//打开新浪授权页面
    }
    
