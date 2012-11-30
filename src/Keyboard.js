document.onkeydown = keyDown;
document.onkeyup = keyUp;
var KEYPRESS = null;

function getKey(name) {
	var i = 0;
	while(i < KEYBOARD.length){
		if(KEYBOARD[i].name == name)
			return KEYBOARD[i];
		++i;
	}
}

function getKeyPS3(name) {
	var i = 0;
	while(i < KEYBOARD.length){
		if(KEYBOARD[i].ps3buttons == name)
			return KEYBOARD[i];
		++i;
	}
}

var KEYBOARD = [
	{
		name  : 'enter',
		ps3buttons : 'start',
		state : 0,
		keyCode : 13,
		trigger : 0	
	},
	{
		name  : 'shift',
		state : 0,
		keyCode : 16,
		trigger : 0				
	},
	{
		name  : 'up',
		state : 0,
		keyCode : 38,
		trigger : 0
	},
	{
		name  : 'left',
		state : 0,
		keyCode : 37,
		trigger : 0
	},
	{
		name  : 'right',
		state : 0,
		keyCode : 39,
		trigger : 0
	},
	{
		name  : 'down',
		state : 0,
		keyCode : 40,
		trigger : 0
	},
	{
		name  : 'q',
		ps3buttons : 'left',
		state : 0,
		keyCode : 81,
		trigger : 0,	
	},
	{
		name  : 'z',
		ps3buttons : 'top',
		state : 0,
		keyCode : 90,
		trigger : 0,	
	},
	{
		name  : 's',
		ps3buttons : 'bottom',
		state : 0,
		keyCode : 83,
		trigger : 0,	
	},
	{
		name  : 'd',
		ps3buttons : 'right',
		state : 0,
		keyCode : 68,
		trigger : 0,	
	},
	{
		name  : 'space',
		ps3buttons : 'R1',
		state : 0,
		keyCode : 32,
		trigger : 0
	},
	{
		name  : 'triangle',
		ps3buttons : 'triangle',
		state : 0,
		keyCode : 49,
		trigger : 0
	},
	{
		name  : 'circle',
		ps3buttons : 'circle',
		state : 0,
		keyCode : 50,
		trigger : 0
	},
	{
		name  : 'cross',
		ps3buttons : 'cross',
		state : 0,
		keyCode : 51,
		trigger : 0
	},		
	{
		name  : 'square',
		ps3buttons : 'square',
		state : 0,
		keyCode : 52,
		trigger : 0
	},
	{
		name  : 'j',
		state : 0,
		keyCode : 74,
		trigger : 0
	}
];


function keyDown(event) {
	var ik = 0;
	while(ik < KEYBOARD.length){

		if (event.keyCode == KEYBOARD[ik].keyCode){
			event.preventDefault();
			KEYBOARD[ik].state = 1;
		}
		++ik;
	}
}

function keyUp(event) {
	var ik = 0;
	KEYPRESS = 0;
	while(ik < KEYBOARD.length){
		if (event.keyCode == KEYBOARD[ik].keyCode){
			event.preventDefault();
			KEYPRESS = KEYBOARD[ik].name;
			KEYBOARD[ik].state = 0;
			KEYBOARD[ik].trigger = 1;
		}
		++ik;
	}
}