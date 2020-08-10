function generateBlocks() {
	let general = document.getElementById('general');
	return general.style.display = 'block';
}


function getRandomColor() {
	let color = []
	for (let i = 0; i < 6; i++) {
		color[i] = Math.floor(Math.random() * 10);
	}
	return `#${color.join('')}`
}

function generateBlocksInterval() {
	let timer = setTimeout(function time() {
		let div = document.querySelectorAll('.blocks'); 
		for (let i = 0; i < div.length; i++) {
			div[i].style.backgroundColor = `${getRandomColor()}`;
		}
		timer = setTimeout(time, 1000);
	}, 10);
}




let btn1 = document.getElementById('watch');
btn1.addEventListener('click', () => {
	generateBlocks();
	let div = document.querySelectorAll('.blocks'); 
	for (let i = 0; i < div.length; i++) {
		div[i].style.backgroundColor = `${getRandomColor()}`;
	}
});

let timer = document.getElementById('timer');
timer.addEventListener('click', () => {
	generateBlocksInterval();
});



