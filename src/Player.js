var Player = function() {
	this.bounds = {
		h:50,
		w:50
	},
	this.coords = {
		x:0,
		y:0
	}
	this.speed = 5;

	this.update = function() {
		this.input();
	}

	this.render = function(ctx) {
		drawRect(ctx,"rgba(0,0,0,1)",this.coords.x,this.coords.y,this.bounds.w,this.bounds.h);
	}

	this.input = function() {
		if ( getKey('up').state ) {
			this.jump();
		}

		if ( getKey('down').state ) {
			this.moveDown();
		}

		if ( getKey('right').state ) {
			this.moveRight();
		}

		if ( getKey('left').state ) {
			this.moveLeft();
		}
	}

	this.moveUp = function() {
		return false;
	}

	this.moveRight = function() {
		this.coords.x += this.speed;
	}

	this.moveDown = function() {
		return false;
	}

	this.moveLeft = function() {
		this.coords.x -= this.speed;
	}
};