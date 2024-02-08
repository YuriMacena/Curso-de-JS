let num = document.getElementById('txtnum')
let list = document.querySelector('select#txtlist')
let res = document.querySelector('div#res')
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
        window.alert('Ok.')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}