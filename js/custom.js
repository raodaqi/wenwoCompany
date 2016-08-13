//jQuery to collapse the navbar on scroll
// console.log(window.screen.width);
// IMGURL =  $(".logo-bar").attr("src");
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // IMGURL =  $(".logo-bar").attr("src");
        $(".white").attr("src","img/MW_black.png");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".white").attr("src","img/MW_white.png");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'jswing');
        event.preventDefault();
    });
})

$("#services .black-photo").on("mouseover",function(){
    id = this.id;
    $("#"+id+" .text2").show();
}).on("mouseout",function(){
    $("#"+id+" .text2").hide();
})

$(".page-scroll .button").on("mouseover",function(){
    $(".button img").attr("src","./img/anzhuo_black.png");
}).on("mouseout",function(){
    $(".button img").attr("src","./img/anzhuo.png");
})