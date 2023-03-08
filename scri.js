function verificar() {
var img = document.getElementById('cat')
var emo = document.getElementsByName('emocao')


if(emo[0].checked){
img.src = "https://i.im.ge/2023/03/03/7ir3LX.632c4aea166f7bbe6a596c1336a7b3cf.jpg"

}

else if(emo[1].checked){
img.src = "https://i.im.ge/2023/03/03/7iuLsh.d9d833eb6da8c42d05a880c5e2d286f3.jpg"
}

else{
img.src = "https://i.im.ge/2023/03/03/7iuaU9.160e4b9e75c90145e578be4273d4f8eb.jpg"
}
res.innerHTML = "VOCÊ ESTA SENDO OBRIGADO A ME MANDAR UMA FOTO DA SUA GATINHA NESSE MOMENTO!"
}

