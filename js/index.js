$(document).ready(function(){
    $('.menu1').click(function(){
        $('body').css('background', '#E4004E')
        $('.menu1').css('width', '40%')
        $('.menu2').css('width', '20%')
        $('.menu3').css('width', '20%')
        $('.menu4').css('width', '20%')
    });
    $('.menu2').click(function(){
        $('body').css('background', '#EF7508')
        $('.menu1').css('width', '20%')
        $('.menu2').css('width', '40%')
        $('.menu3').css('width', '20%')
        $('.menu4').css('width', '20%')
    });
    $('.menu3').click(function(){
        $('body').css('background', '#FCCC00')
        $('.menu1').css('width', '20%')
        $('.menu2').css('width', '20%')
        $('.menu3').css('width', '40%')
        $('.menu4').css('width', '20%')
    });
    $('.menu4').click(function(){
        $('body').css('background', '#008950')
        $('.menu1').css('width', '20%')
        $('.menu2').css('width', '20%')
        $('.menu3').css('width', '20%')
        $('.menu4').css('width', '40%')
    });
    $(window).scroll(function(){
        var s = $(window).scrollTop();
        console.log(s);
        if(s >= 100){
        $('h1 img').css('height', '100px')
            
        }
    });
});