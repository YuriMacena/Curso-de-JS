function calcular(){
    date=new Date() //data atual
    ano=date.getFullYear() //ano atual, 4 digitos
    fano=document.getElementById('nasc')
    res=document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value>ano)){
        window.alert('Verifique os resultados e tente novamente.')
    }else{
        fsex=document.getElementsByName('typeofsex')
        idade=ano-Number(fano.value)
        gen=''
        img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen='Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade<25){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade<60){
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            gen='Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade<25){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade<60){
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML=`Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img) //add elemento img
    }
}