$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing-1", {
        strings: ["Bot Developer", "Student", "A friend","Web Deverloper","Web Disigner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Hii There!", "You Can Talk Me", "නිද්දා","😘","Thanks!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["<b><h1>Hello 💫, You Know Me As Nidusha Amarasinghe</h1></b>"],
        typeSpeed: 100,
        backSpeed: 100000000000000000000,
        loop: true
    });
    var typed = new Typed(".typing-4", {
        strings: ["<br>____ꕤ About Me ꕤ_________<br> ◈──────────────────◈<br>➼ Name :  A.A Nidusha Amarasinghe<br>➼ Username : @NidushaAmarasinghe<br>➼ Contact me : @NidushaChat_Bot <br>➼ Birthday  : 2009/07/03<br>➼ Relationship Status : single with real Friends<br>➼ Who am I:  An a/l  student<br>➼ School : Bandaragama Central <br>➼ City : Bandaragama <br>➼ District » Kaluthara <br>➼ Country » Sri Lanka 🇱🇰<br>◈──────────────────◈</p>"],
        typeSpeed: 100,
        backSpeed: 100000000000000000000,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});