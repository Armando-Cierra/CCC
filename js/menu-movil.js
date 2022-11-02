var btnMenu = document.getElementById('menu-btn');
var menuMovil = document.getElementById('menu-movil');
var degradado = document.getElementById('degradado');
var enlaces = document.getElementsByTagName('a');

btnMenu.addEventListener('click', accion);
degradado.addEventListener('click', cerrar);
document.addEventListener('keyup', filtrarTecla);

function accion(){
    if(btnMenu.className == 'hamburger hamburger--collapse'){
        btnMenu.className = 'hamburger hamburger--collapse is-active';
        menuMovil.className = 'menu-movil activo';
        degradado.style.display = 'block';
        setTimeout(function(){
            degradado.className = 'degradado activo';
        }, 10)
    } else{
        cerrar();
    }
}

function filtrarTecla(item){
    if(item.keyCode == 27){
        cerrar();
    }
}

function cerrar(){
    btnMenu.className = 'hamburger hamburger--collapse';
    degradado.className = 'degradado';
    menuMovil.className = 'menu-movil';
    setTimeout(function(){
        degradado.style.display = 'none';
    }, 500)
}