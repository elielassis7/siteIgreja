let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slide img")
    max = images.length;

function nextImage(){
    
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= max)
        currentImageIndex=0
    images[currentImageIndex].classList.add("selected")
}

function start()    {
    setInterval(() => {nextImage()}, time)
    
}

window.addEventListener("load", start)


var exibeMenu = document.getElementById("btn-acesso");
exibeMenu.addEventListener('click', function(){
    document.getElementById('btn-acesso').style.display = "none";
    document.getElementById('login-acesso').style.display = 'block';
    
})

function entrar(){
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    
        
}
