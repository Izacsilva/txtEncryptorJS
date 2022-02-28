
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


//* Script que impede ao usuário digital números.

const inputEncrypt = document.querySelector('.text-input')

inputEncrypt.addEventListener("keypress", function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58) {
        const alertaDeErro = document.querySelector('.alertaDeErro')
        alertaDeErro.classList.toggle('balancar') 
        e.preventDefault();
    } 

})
//*

document.querySelector('#btn-cripto').addEventListener('click', encrypt)

function encrypt() {
    const inputEncrypt = document.querySelector('.text-input').value;
    // const textForEncrypt = inputEncrypt.value;

    console.log(inputEncrypt)



}


