let canvas = document.querySelectorAll('.canvas')[ 0 ];
let ctx    = canvas.getContext('2d');

let is_active = 0;

document.querySelectorAll('.opt-translate')[ 0 ].addEventListener('click', translate);
document.querySelectorAll('.opt-rand-colors')[ 0 ].addEventListener('click', colors);

function resetCanvas(){
	
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	clearCanvas();
	
}

function clearCanvas(){
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
}

function translate(){
	
	let id    = 1;
	is_active = 1;
	
	resetCanvas();
	
	function paint(){
		
		clearCanvas();
		ctx.strokeRect(50, 50, 100, 100);
		ctx.beginPath();
		ctx.moveTo(75, 75);
		ctx.lineTo(75 + 50, 75);
		ctx.lineTo(75 + 50, 75 + 50);
		ctx.lineTo(75, 75);
		ctx.fill();
		ctx.font = '16px white impact';
		ctx.strokeText('HELLO!', 75, 75);
		
		return 1;
		
	}
	
	let n     = 0;
	let step  = 2;
	let limit = 20;
	
	is_active === id && paint() && requestAnimationFrame(move);
	
	function move(){
		
		if ( is_active === id ) {
			
			if ( n > limit || n < -limit ) {
				
				step = -step
				
			}
			
			n += step;
			
			ctx.translate(n, 0);
			paint();
			
			requestAnimationFrame(move);
			
		}
		
	}
	
}
function colors(){
	
	let id    = 2;
	is_active = 2;
	
	resetCanvas();
	
	function paint(){
		
		let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
		
		for ( let i = 0; i < data.data.length / 4; i++ ) {
			
			if ( (i % 10) === 0 ) {
				
				let pos       = (i * 4);
				let grayShade = Math.round(Math.random() * 255);
				
				data.data[ pos ]     = grayShade;
				data.data[ pos + 1 ] = grayShade;
				data.data[ pos + 2 ] = grayShade;
				data.data[ pos + 3 ] = 255;
				
			}
			
		}
		
		ctx.putImageData(data, 0, 0);
		
		return 1;
		
	}
	
	is_active === id && paint();
	
}