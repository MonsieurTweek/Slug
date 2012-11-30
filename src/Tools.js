// Alias document.getElementById
var $ = function(id) { return document.getElementById(id); };

// Alias console.log
var log = function(msg) { console.log(msg); };

// Calculate FPS
var fps = 0, now, lastUpdate = (new Date)*1 - 1;
var fpsFilter = 50;
calculateFPS = function() {
	var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
	fps += (thisFrameFPS - fps) / fpsFilter;
	lastUpdate = now;

	var fpsOut = $('fps-counter');
	setInterval(function(){
		fpsOut.innerHTML = fps.toFixed(1) + "fps";
	}, 1000);
};


/* GRAPHIC TOOLS */
// Draw a rectangle
function drawRect(context,color,x,y,width,height) {
	context.fillStyle = color;
	context.fillRect(x, y, width, height);
}

// Draw a circle
function drawCircle(context,color,x,y,radius) {	
	context.fillStyle = color;
	context.beginPath();
	context.arc(x,y,radius,0,Math.PI*2,true);
	context.fill();
}