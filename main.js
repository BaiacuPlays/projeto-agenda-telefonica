const form = document.getElementById ("form-contato");
const contato = []
const numero = []

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionalinha()
    atualizatabela()
})

function adicionalinha () {
    const inputnomecontato = document.getElementById("nome-contato");
    const inputnumerocontato = document.getElementById("numero-contato");

    if (contato.includes(inputnomecontato.value)) {
        alert (`O Contato: ${inputnomecontato.value}, ja foi adicionado`)
    } else {

    contato.push (inputnomecontato.value)
    numero.push(parseFloat(inputnumerocontato.value));

    let linha = "<tr>"
    linha += `<td>${inputnomecontato.value}</td>`
    linha += `<td>${inputnumerocontato.value}</td>`
    linha += "</tr>";

    linhas += linha
}

    inputnomecontato.value = ""
    inputnumerocontato.value = ""
}

function atualizatabela() {
    const corpotabela = document.querySelector("tbody")
    corpotabela.innerHTML = linhas
}
