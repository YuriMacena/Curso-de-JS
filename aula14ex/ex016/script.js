function calcular(){
    inputinc=document.getElementById('inc')
    inputend=document.getElementById('end')
    inputpas=document.getElementById('pas')
    res=document.querySelector('div#result')

    if (inc.value.length==0 || end.value.length==0 || pas.value.length==0){
        window.alert('Dados inválidos, tente novamente.')
        } else {
            result.innerHTML=`<p>Contando:</p>`
            i=Number(inputinc.value)
            f=Number(inputend.value)
            p=Number(inputpas.value)
            if(p==0 || p<=0){
                window.alert('Dados inválidos, tente novamente. Consideraremos passo=1')
                p=1
            }
            if (i<f){
                //contagem crescente
               for(contador=i;contador<=f;contador+=p){
                    res.innerHTML += `${contador} 👉` //+=: concatenação
                }
        } else {
            //contagem regressiva
            for(contador=i;contador>=f;contador-=p){
                res.innerHTML += `${contador} 👉`
            }
        }
        res.innerHTML+=`📍`
    }
}