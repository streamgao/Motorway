 
 
	function bounceIn() {
    	$('#menu').removeClass().addClass("bounceIn");
    	var wait = window.setTimeout( function(){
    		$('#menu').removeClass()},
    		300
    	);
    }
	
	function bounceOut() {
    	$('#menu').removeClass().addClass("bounceOut");
    	var wait = window.setTimeout( function(){
    		$('#menu').removeClass().addClass('hidden')},
    		300
    	);
    }
	
    function fadeInUp() {
    	$('#menubtn').removeClass(); 
    }
	
	function fadeOutDown() {
    	$('#menubtn').attr("class",'hidden');
    }


	
	function comicWindow(type) {
	   	if (!type) {
			<!--宽度匹配 -->
			var s = window.innerWidth / 640;
			var scale = "scale(" + s + "," + s + ")";
			$(".edge").css("-webkit-transform-origin", "0% 0%");
			$(".edge").css("-webkit-transform", scale);
			
			
			<!--滑动翻页 -->
			$$("items").gesture = new zyEvent("items", function(me, dx, dy){//移动过程中事件
			}, function(me, dx, dy, t){//手指松开后事件
				if (t == "left") {
					window.location.href = localStorage.topage;
				}
				else 
					if (t == "right") {
						window.location.href = localStorage.backpage;
					}
				
			}, false, function(e)//对象动画结束事件
			{
				alert("right");
			});

		}
	}//uexOnload
			