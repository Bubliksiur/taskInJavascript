const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');

const potegowanieBtn = document.querySelector('#potegowanie');

const wynik = document.querySelector('#wynik');

function potegowanie(e) {
	e.preventDefault();
	if (value1.value == "" || value2.value == "") {
		wynik.textContent = `Proszę uzupełnić obie liczby.`;
	} else {
		let result = Number(value1.value) ** Number(value2.value);
		wynik.textContent = `${result}`;
	}
}

potegowanieBtn.addEventListener('click', potegowanie);