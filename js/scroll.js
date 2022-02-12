const scrollBtn = document.querySelector('.scroll-btn') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})
$("#t1").click(function() {
    $('html, body').animate({
        scrollTop: $("#div1").offset().top-80
    }, 300);
});
$("#t2").click(function() {
    $('html, body').animate({
        scrollTop: $("#div2").offset().top-80
    }, 300);
});
$("#t3").click(function() {
    $('html, body').animate({
        scrollTop: $("#div3").offset().top-80
    }, 300);
});
$("#t4").click(function() {
    $('html, body').animate({
        scrollTop: $("#div4").offset().top-80
    }, 300);
});
$("#t5").click(function() {
    $('html, body').animate({
        scrollTop: $("#div5").offset().top-80
    }, 300);
});
$("#t6").click(function() {
    $('html, body').animate({
        scrollTop: $("#div6").offset().top-80
    }, 300);
});
$("#t7").click(function() {
    $('html, body').animate({
        scrollTop: $("#div7").offset().top-80
    }, 300);
});

