const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.getElementById('email');
const button = document.getElementById('email-button');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function primaryEmailCheck(value, length) {
    if (
        length > 5 &&
        value.indexOf('@') != -1 &&
        value.indexOf('.') &&
        value.indexOf('@') < value.indexOf('.') &&
        input.value.indexOf('.') <= input.value.length - 3
    )
        return true;
    return false;
}

function onInput() {
    if (primaryEmailCheck(input.value, input.value.length)) {
        if (isEmailValid(input.value)) {
            input.style.color = '#BDBDBD';
            input.style.borderColor = '#4B9200';
            button.style.borderColor = '#4B9200';
            button.style.color = '#4B9200';
            button.style.pointerEvents = 'all';
        } else {
            input.style.color = '#D31414';
            input.style.borderColor = '#D31414';
            button.style.borderColor = '#D31414';
            button.style.color = '#D31414';
            button.style.pointerEvents = 'none';
        }
    } else {
        input.style.color = '#BDBDBD';
        input.style.borderColor = '#F9804B';
        button.style.borderColor = '#333B41';
        button.style.color = '#000000';
        button.style.pointerEvents = 'none';
    }
}

input.addEventListener('input', onInput);

button.addEventListener('click', () => {
    if (button.style.pointerEvents == 'all') {
        input.value = ' ';
        input.style.color = '#BDBDBD';
        input.style.borderColor = '#F9804B';
        button.style.borderColor = '#333B41';
        button.style.color = '#000000';
        button.style.pointerEvents = 'none';
        alert('Send mail');
    }
});
