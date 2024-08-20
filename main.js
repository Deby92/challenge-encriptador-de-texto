function encriptar() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}
// function copiarTexto() {
//     const outputText = document.getElementById('outputText');
//     outputText.select();
//     outputText.setSelectionRange(0, 99999);

//     navigator.clipboard.writeText(outputText.value)
//         .then(() => {
//             alert("Texto copiado al portapapeles!");
//         })
//         .catch(err => {
//             console.error("Error al copiar el texto: ", err);
//         });
// }

function copiarTexto() {
    const texto = outputText.value;
    const botonCopiar = document.querySelector('.btn-copiarTexto');

    navigator.clipboard.writeText(texto).then(() => {
        botonCopiar.textContent = "¡Copiado!";
        botonCopiar.classList.add('copiado');
        botonCopiar.disabled = true; 
    })
    
}

