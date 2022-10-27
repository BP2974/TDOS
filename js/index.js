$(document).ready(function(){
    $('.menu1').click(function(){
        $('body').css('background', '#E4004E')
        $('.menu1').css('width', '55%')
        $('.menu2').css('width', '15%')
        $('.menu3').css('width', '15%')
        $('.menu4').css('width', '15%')
        $('.album').removeClass('active')
        $('.menu1>.album').addClass('active')
    });
    $('.menu2').click(function(){
        $('body').css('background', '#EF7508')
        $('.menu1').css('width', '15%')
        $('.menu2').css('width', '55%')
        $('.menu3').css('width', '15%')
        $('.menu4').css('width', '15%')
        $('.album').removeClass('active')
        $('.menu2>.album').addClass('active')
    });
    $('.menu3').click(function(){
        $('body').css('background', '#FCCC00')
        $('.menu1').css('width', '15%')
        $('.menu2').css('width', '15%')
        $('.menu3').css('width', '55%')
        $('.menu4').css('width', '15%')
        $('.album').removeClass('active')
        $('.menu3>.album').addClass('active')
    });
    $('.menu4').click(function(){
        $('body').css('background', '#008950')
        $('.menu1').css('width', '15%')
        $('.menu2').css('width', '15%')
        $('.menu3').css('width', '15%')
        $('.menu4').css('width', '55%')
        $('.album').removeClass('active')
        $('.menu4>.album').addClass('active')
    });
    $(window).scroll(function(){
        var s = $(window).scrollTop();
        console.log(s);
        if(s >= 100){
        $('h1 img').css('height', '100px')
            
        }
    });
});