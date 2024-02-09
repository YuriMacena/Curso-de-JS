let num = document.getElementById('txtnum')
let list = document.querySelector('select#txtlist')
let res = document.querySelector('div#result')
let valores = [ ]

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function analisar(){
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
        } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //apaga onde o número foi digitado
    num.focus() //focus continua na opção de digitar
}

function final(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}