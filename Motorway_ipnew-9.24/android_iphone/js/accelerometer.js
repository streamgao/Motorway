function accelerometerChange(x,y,z){
		//document.getElementById('accelerometer').innerHTML = "X=" + x + ";<br>Y=" + y + ";<br>Z=" + z;
		if(x<-5){
			uexSensor.close(1,3);
			//uexWindow.open("share","0",localStorage.topage,"2","0","0","0");
			window.location.href=localStorage.topage; 
			localStorage.moveItem("topage");
			localStorage.moveItem("backpage");
		}
		if(x>5){
			uexSensor.close(1,3);
			//uexWindow.open("share","0",localStorage.backpage,"1","0","0","0");
			window.location.href=localStorage.backpage; 
			localStorage.moveItem("topage");
			localStorage.moveItem("backpage");
		}
	}
