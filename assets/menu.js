function menuShow(){
    var menuMobile = window.document.getElementsByClassName('.mobile-menu')
    if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open')
}else{
    menuMobile.classList.add('open')
}
}