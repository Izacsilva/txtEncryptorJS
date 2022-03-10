
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

// Função encryptografar

function criptografar() {

    // seleciono o campo de texto e pego o conteúdo escrito pelo usuário.
    const inputEncrypt = document.querySelector('#input-texto').value;
    
    // txtEnrypt é o resultado da criptografia, feito através do método replace com uso de regexp.
    let txtEncrypt = inputEncrypt.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")            
                                .replace(/a/gi, "ai")            
                                .replace(/o/gi, "ober")            
                                .replace(/u/gi, "ufat")

    
    // seleciono o campo de resultados e retorno o valor do texto emcriptografado.           
    const campoResultado = document.querySelector('#msgResultado')
    campoResultado.value = txtEncrypt

    const form = document.querySelector("#formulario")
    form.reset()

}

function descriptografar() {

    // seleciono o campo de texto e pego o conteúdo escrito pelo usuário.
    const inputEncrypt = document.querySelector('#input-texto').value;
    
    // txtEnrypt é o resultado da criptografia, feito através do método replace com uso de regexp.
    let txtEncrypt = inputEncrypt.replaceAll("ai", "a")
                                .replaceAll("enter", "e")
                                .replaceAll("imes", "i")
                                .replaceAll("ober", "o")
                                .replaceAll("ufat", "u")

    
    // seleciono o campo de resultados e retorno o valor do texto emcriptografado.           
    const campoResultado = document.querySelector('#msgResultado')
    campoResultado.value = txtEncrypt

    const form = document.querySelector("#formulario")
    form.reset()

}

function copy() {
    let copiaTexto = document.querySelector('#msgResultado')
    navigator.clipboard.writeText(copiaTexto.value)
    
    alert("copiado para área de transferência.")
}


//* Script que impede ao usuário digitar números.

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

document.querySelector('#btn-cripto').addEventListener('click', criptografar)
document.querySelector('#btn-descripto').addEventListener('click', descriptografar)
document.querySelector('#btn-copy').addEventListener('click', copy)




