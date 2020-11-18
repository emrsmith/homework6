var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting"); 
	console.log(video.volume);
});



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video"); 
	video.pause(); 
	
});

document.querySelector("#volumeSlider").addEventListener("change", function() { 
	console.log(this); 
	console.log(this.value); 
	video.volume = this.value/100; 
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#slower").addEventListener("click", function () { 
	video.playbackRate = .9*(video.playbackRate); 
	console.log(video.playbackRate); 
}); 

document.querySelector("#faster").addEventListener("click", function () { 
	video.playbackRate = 1.1*(video.playbackRate); 
	console.log(video.playbackRate); 
}); 


document.querySelector("#mute").addEventListener("click", function () { 
	if (video.muted = 0) { 
		video.muted = 1; 
		document.querySelector("#mute").innerHTML = "Unmute"; 
		console.log(video.muted); 
	}
	else if (video.muted = 1) { 
		video.muted = 0; 
		document.querySelector("#mute").innerHTML = "Mute"; 
		console.log(video.muted);
	}
}); 


document.querySelector("#skip").addEventListener("click", function () { 
	if (video.currentTime > video.duration - 5) { 
		video.currentTime = 0; 
	} else { 
		video.currentTime = video.currentTime + 5; 
	} 
	console.log(video.currentTime); 
	
}); 


document.querySelector("#old").addEventListener("click", function () { 
	document.getElementById("#myVideo").className = 'oldTime'; 
	
}); 

document.querySelector("#original").addEventListener("click", function () { 
	document.getElementById("#myVideo").classList.remove('oldTime'); 
	
}); 

