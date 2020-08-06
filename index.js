
setInterval(()=>{

	var a= new Date();
	document.getElementById('saniye').style.transform = `rotateZ(${a.getSeconds()*6+a.getMilliseconds()/166.6}deg)`;
	document.getElementById('deqiqe').style.transform = `rotateZ(${a.getMinutes()*6+a.getSeconds()/10}deg)`;
	document.getElementById('saat').style.transform = `rotateZ(${a.getHours()*30+a.getMinutes()/2}deg)`;
	// document.getElementById('mcs').style.transform = `rotateZ(${a.getMilliseconds()*0.36}deg)`;

},1);


