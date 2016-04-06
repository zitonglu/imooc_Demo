window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	// 音乐播放时，自动停止旋转
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	// 点击音乐图标，控制音乐播放
	music.onclick = function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			// this.style.animationPlayState ="running";
			// 兼容不好
		}else{
			audio.pause();
			this.setAttribute("class","");
			// this.style.animationPlayState ="paused";
		};
	};
	// audio.addEventListener{"touchstart",function (event) {
	// 		if(audio.paused){
	// 			audio.play();
	// 			this.setAttribute("class","play");
	// 		}else{
	// 			audio.pause();
	// 			this.setAttribute("class","");
	// 		};
	// },false};

};