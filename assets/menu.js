function menuShow() {
    var menuMobile = document.getElementsByClassName ('.mobile-menu');
    if(menuMobile.classlist.contains ('open')) { 
        menuMobile.classlist.remove ('open')
    } else {
        menuMobile.classlist.add ('open')

    }
    
}