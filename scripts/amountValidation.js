const amountInputForm = document.querySelector('.input__value');
const amountInput = document.getElementById('amount');
const amountButton = document.getElementById('amount-button');
const progressBar = document.querySelector('.progress-bar__switcher');
const radioButtons = document.getElementsByName('amount-radio-button');

function onAmountInput() {
    radioButtons.forEach((el) => {
        el.checked = false;
    });
    if (amountInput.value.length == 0) {
        amountInputForm.classList.remove('input__value--incorrect');
        amountInputForm.classList.remove('input__value--correct');
        amountButton.classList.remove('active');
    } else if (!isNaN(Number(amountInput.value))) {
        amountInputForm.classList.remove('input__value--incorrect');
        amountInputForm.classList.add('input__value--correct');
        amountButton.classList.add('active');
    } else {
        amountInputForm.classList.remove('input__value--correct');
        amountInputForm.classList.add('input__value--incorrect');
        amountButton.classList.remove('active');
    }
}

amountInput.addEventListener('input', onAmountInput);

progressBar.addEventListener('click', (e) => {
    radioButtons.forEach((el) => {
        if (el == e.target) {
            amountButton.classList.add('active');
        }
    });
});

amountButton.addEventListener('click', () => {
    if (amountButton.classList.contains('active')) {
        amountButton.classList.remove('active');
        amountInputForm.classList.remove('input__value--incorrect');
        amountInputForm.classList.remove('input__value--correct');
        amountInput.value = '';
        radioButtons.forEach((el) => {
            el.checked = false;
        });
    }
});
