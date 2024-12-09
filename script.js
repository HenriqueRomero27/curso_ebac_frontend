function validarFormulario() {
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    
    if (parseFloat(campoB) > parseFloat(campoA)) {
        alert("Formulário válido! O número B é maior que o número A.");
    } else {
        alert("Formulário inválido! O número B deve ser maior que o número A.");
    }
}