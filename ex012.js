agora=new Date()//horário real de agora
hora=agora.getHours() //hora de agora
console.log(`Agora são exatamente ${hora} horas`)
if (hora<12){
    console.log('Bom dia.')
}else if(hora<=18){
    console.log('Boa tarde.')
}else{
    console.log('Boa noite.')
}