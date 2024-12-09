const form = document.getElementById('form')
let linhas = ""

const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji triste"/>'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite qual será a nota mínima: "))

const atividades =  []
const notas =  []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()

})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade').value
    const inputNotaAtividade = document.getElementById('notaAtividade').value
    
    if(atividades.includes(inputNomeAtividade)) {
        alert(`A atividade ${inputNomeAtividade} já existe.`)
    } else {
        atividades.push(inputNomeAtividade)
        notas.push(parseFloat(inputNotaAtividade))
    
        let linha = "<tr>"
        linha += `<td>${inputNomeAtividade}</td>`
        linha += `<td>${inputNotaAtividade}</td>`
        linha += `<td>${inputNotaAtividade >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        
        linhas += linha
    }

    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function calculaMediaFinal() {
    let soma = 0
    for(let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    
    return soma / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerText = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}