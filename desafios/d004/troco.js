function calcular(){
    let produt = window.prompt('Que produto você está comprando?')
    let custo = Number(window.prompt(`Quanto custa ${produt} que você está comprando?`))
    let valor = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produt}?`))
    let troco = `${valor-custo}`
    window.alert(`Você comprou ${produt} que custou R$ ${custo}.
    Deu R$ ${valor} em dinheiro e vai receber R$ ${troco} de troco.
    Volte Sempre!`)
}