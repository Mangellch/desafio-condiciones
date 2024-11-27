//Condicion n°1
const imgPrincipal = document.querySelector('.img_uno');

imgPrincipal.addEventListener('click', () => {
    if (imgPrincipal.style.border) {
        imgPrincipal.style.border = '';
    } else {
        imgPrincipal.style.border = '2px solid red';
    }
});

//Condicion n°2 
const inputsStickers = document.querySelectorAll('.cont_stickers input');
const verificarBtn = document.querySelector('.btn_sticker button');

verificarBtn.addEventListener('click', () => {
    let totalStickers = 0;

    inputsStickers.forEach(input => {
        const cantidad = parseInt(input.value) || 0; 
        totalStickers += cantidad;
    });

    if (totalStickers <= 10) {
        alert(`Llevas ${totalStickers} stickers.`);
    } else {
        alert('Llevas demasiados stickers.');
    }
});

//Condicion n°3 
const selectElements = document.querySelectorAll('.select-number');
const verificarPasswordBtn = document.querySelector('.btn_select button');
const resultadoPassword = document.querySelector('.resultado-password'); 
verificarPasswordBtn.addEventListener('click', () => {
    
    const password1 = selectElements[0].value;
    const password2 = selectElements[1].value;
    const password3 = selectElements[2].value;

    if (password1 === '9' && password2 === '1' && password3 === '1') {
        resultadoPassword.textContent = 'Password 1 correcto';
        resultadoPassword.style.color = 'green';
    } else if (password1 === '7' && password2 === '1' && password3 === '4') {
        resultadoPassword.textContent = 'Password 2 correcto';
        resultadoPassword.style.color = 'green';
    } else {
        resultadoPassword.textContent = 'Password incorrecto';
        resultadoPassword.style.color = 'red';
    }
});



