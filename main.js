const text = document.querySelector('.typing');
const words = ['web developer', 'frontend ', 'freelancer'];
let wordIndex = 0;
let letterIndex = 0;

function type() {
	if (letterIndex === words[wordIndex].length) {
		// move on to the next word
		wordIndex++;
		if (wordIndex === words.length) {
			// restart the loop
			wordIndex = 0;

		}
		letterIndex = 0;
		text.textContent = '';
	}

	const currentWord = words[wordIndex];
	const letter = currentWord[letterIndex];
	text.textContent += letter;
	letterIndex++;
}

setInterval(type, 300);


const main = document.getElementById('contanier')
const theme = document.getElementById('theme');

theme.addEventListener('click', () => {
	main.classList.toggle('darkmode');

	const attclass = theme.getAttribute('class');
	theme.classList.remove(`${attclass === 'fas fa-moon'? 'fa-moon':'fa-sun' }`)
	theme.classList.add(`${attclass !== 'fas fa-moon'? 'fa-moon':'fa-sun' }`)

});
