const amountInputForm = document.querySelector('.input__value')
const amountInput = document.getElementById('amount')
const amountButton = document.getElementById('amount-button')
const radioButtons = document.getElementsByName("amount-radio-button")


function onAmountInput() {
    radioButtons.forEach( el =>{
        el.checked = false;    
    });
    if( amountInput.value.length == 0 ){
        amountInputForm.classList.remove('input__value--incorrect')
        amountInputForm.classList.remove('input__value--correct')
        amountButton.style.pointerEvents = 'none';
    }
    else if ( !isNaN( Number(amountInput.value) ) ) {
        amountInputForm.classList.remove('input__value--incorrect')
        amountInputForm.classList.add('input__value--correct')
        amountButton.style.borderColor = '#4B9200';
        amountButton.style.pointerEvents = 'all';
    } else {
        amountInputForm.classList.remove('input__value--correct')
        amountInputForm.classList.add('input__value--incorrect')
        amountButton.style.background = '#767474';
        amountButton.style.pointerEvents = 'none';
    }

}

amountInput.addEventListener('input', onAmountInput);
