const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');

const dodajBtn = document.querySelector('#dodaj');
const odejmijBtn = document.querySelector('#odejmij');
const pomnozBtn = document.querySelector('#pomnoz');
const podzielBtn = document.querySelector('#podziel');

const wynik = document.querySelector('#wynik');

function dodaj(e) {
	e.preventDefault();
	if (value1.value == "" || value2.value == "") {
		wynik.textContent = `Proszę uzupełnić obie liczby.`;
	} else {
		let suma = Number(value1.value) + Number(value2.value);
		wynik.textContent = `Wynik dodawania wynosi: ${suma}`;
	}
}

function odejmij(e) {
	e.preventDefault();
	if (value1.value == "" || value2.value == "") {
		wynik.textContent = `Proszę uzupełnić obie liczby.`;
	} else {
		let roznica = Number(value1.value) - Number(value2.value);
		wynik.textContent = `Wynik odejmowania wynosi: ${roznica}`;
	}
}

function mnozenie(e) {
	e.preventDefault();
	if (value1.value == "" || value2.value == "") {
		wynik.textContent = `Proszę uzupełnić obie liczby.`;
	} else {
		let iloczyn = Number(value1.value) * Number(value2.value);
		wynik.textContent = `Wynik mnożenia wynosi: ${iloczyn}`;
	}
}

function dzielenie(e) {
	e.preventDefault();
	if (value1.value == "" || value2.value == "") {
		wynik.textContent = `Proszę uzupełnić obie liczby.`;
	} else if (value2.value == 0) {
		wynik.textContent = `Nie można dzielić przez 0!!`
	} else {
		let iloraz = Number(value1.value) / Number(value2.value);
		wynik.textContent = `Wynik dzielenia wynosi: ${iloraz}`;
	}
}

dodajBtn.addEventListener('click', dodaj)
odejmijBtn.addEventListener('click', odejmij)
pomnozBtn.addEventListener('click', mnozenie)
podzielBtn.addEventListener('click', dzielenie)

// praktycznyEgzamin.pl