window.onscroll = function () {scrollfunction()};
$('a').children('span').css("color" , "orangered");
function scrollfunction () {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        $('.navbar-expand-sm').addClass('nav-bgdark fixed-top')
        $('.nav-item > a').css({"color":"white"})
        $('a.navbar-brand').css({"color" : " white"})
        $('a').children('span').css("color" , "white");
    }
    else {
        $('.navbar-expand-sm').removeClass('nav-bgdark fixed-top')
        $('.nav-item > a').css({"color": "rgb(7,6,6)"})  
        $('.navbar-brand , a').css("color", "black")
        $('a').children('span').css("color" , "orangered");
        
    }
}