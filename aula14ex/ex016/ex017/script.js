function tabuada(){
    let num=document.getElementById('txtn')
    let tab=document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Digite um número para gerar a tabuada.')
    } else {
        n=Number(num.value)
        cont=1
        tab.innerHTML=''
        while (cont<=10){
            item=document.createElement('option')
            item.text=`${n} x ${cont} = ${n*cont}`
            item.value=`tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}