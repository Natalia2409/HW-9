function generateBlocks() {
	let general = document.getElementById('general');
	return general.style.display = 'block';
}

function setColor() {
	let div = document.querySelectorAll('.blocks'); 
		for (let i = 0; i < div.length; i++) {
			div[i].style.backgroundColor = `${getRandomColor()}`;
		}
}


function getRandomColor() {
	let color = []
	for (let i = 0; i < 6; i++) {
		color[i] = Math.floor(Math.random() * 10);
	}
	return `#${color.join('')}`
}
let timerColor;
function generateBlocksInterval() {
	timerColor = setInterval(() => setColor(), 1000);
}




let btn1 = document.getElementById('watch');
btn1.addEventListener('click', () => {
	generateBlocks();
	setColor();
	btn1.style.display = 'none';
});

let timer = document.getElementById('timer');
timer.addEventListener('click', () => {
	generateBlocksInterval();
	timer.style.display = 'none';
});

let stop = document.getElementById('stop');
stop.addEventListener('click', () => {
	clearInterval(timerColor);
	timer.style.display = 'inline-block';
});


