$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })
    // toggle menu script//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation script //
    var typed = new Typed(".typing", {
        strings: ["Kunstner", "Mor", "Designer", "Sjov", "Test3"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
      var typed = new Typed(".typing-2", {
        strings: ["Kunstner", "Maler", "Designer", "Sjov", "Test3"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

