function menuShow(){
    var menuMobile = window.document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open')
}else{
    menuMobile.classList.add('open')
}
}