function carregar(){
    msg=document.getElementById('msg')
    img=document.getElementById('imagem')
    data=new Date()
    hora=data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora>=0 && hora<12){
        //bom dia
        img.src='fotoamanhecer.jpg'
        document.body.style.background='blue'
    }else if (hora>=12 && hora<18){
        img.src='fotoentardecer.jpg'
        document.body.style.background='orange'
    }else{
        img.src='fotoanoitecer.jpg'
        document.body.style.background="black"
        //boa noite
    }

}

