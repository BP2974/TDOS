$(document).ready(function(){

    /* 지금은 너무 같은 코드가 반복되는데 반복문으로 돌릴 수 없을까??
    현재 선택된 넓이, 나머지 넓이, 배경색을 변수로 저장하면 반복문으로 돌릴 수 있을 것 같다. 아마도?? */

    /* $('.menu1').click(function(){
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
    }); */
    const menus = $('ol>li')
    const back_color = ['#E4004E', '#EF7508', '#FCCC00', '#008950']

    for(let i = 0; i < menus.length; i++){
        $('.menu'+(i+1)).click(function(){
            $('#info').css('background', back_color[i]);
            $('#members').css('background', back_color[i]);
            $(menus).css('width', '8%');
            $(this).css('width', '76%')
            $('.album').removeClass('active')
            $(this).addClass('active')
            $(this).children('.album').addClass('active')
        });
    }

    /* 그저 스크롤 값을 받아오고 스크롤이 일정 숫자 이상이 되면 css를 변경해 크기를 키우는 형식인데, 뚝 뚝 변하는 것이 아니라 스크롤에 맞춰서 서서히 변하는 것으로 바꾸고 싶다. 세세히 쪼개기 */

    $(window).scroll(function(){
        var s = $(window).scrollTop();
        console.log(s);
        if(s < 100 && s >= 0){
            $('header').css('height', '95%')
            $('.logo_back').css('background', 'rgb(255, 255, 255)')
        } else if(s < 200 && s >= 100){
            $('header').css('height', '95%')
            $('.logo_back').css('background', 'rgba(255, 255, 255, 0.9)')
        } else if(s < 300 && s >= 200){
            $('header').css('height', '85%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.8)')
        } else if(s < 400 && s >= 300){
            $('header').css('height', '75%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.7)')
        } else if(s < 500 && s >= 400){
            $('header').css('height', '65%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.6)')
        } else if(s < 600 && s >= 500){
            $('header').css('height', '55%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.5)')
        } else if(s < 700 && s >= 600){
            $('header').css('height', '45%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.4)')
        } else if(s < 800 && s >= 700){
            $('header').css('height', '35%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.3)')
        } else if(s < 900 && s >= 800){
            $('header').css('height', '25%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.2)')
            $('.logo_y').css('opacity', '100%')
        } else if(s < 1000 && s >= 900){
            $('header').css('height', '15%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.1)')
            $('.logo_y').css('opacity', '50%')
        } else if(s < 1100 && s >= 1000){
            $('header').css('height', '10%')
            $('.logo_back').css({background: 'rgba(255, 255, 255, 0)', height: '100%'})
            $('.logo_y').css('opacity', '0%')
        } else if(s >= 1100){
            $('header').css('height', '10%')
            $('.logo_back').css({background: 'rgba(255, 255, 255, 0)', height: '0%'})
            $('.logo_y').css('opacity', '0%')
        }
    });
    
    window.onload = function(){
        var s = $(window).scrollTop();
        if(s < 100 && s >= 0){
            $('header').css('height', '95%')
            $('.logo_back').css('background', 'rgb(255, 255, 255)')
        } else if(s < 200 && s >= 100){
            $('header').css('height', '95%')
            $('.logo_back').css('background', 'rgba(255, 255, 255, 0.9)')
        } else if(s < 300 && s >= 200){
            $('header').css('height', '85%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.8)')
        } else if(s < 400 && s >= 300){
            $('header').css('height', '75%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.7)')
        } else if(s < 500 && s >= 400){
            $('header').css('height', '65%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.6)')
        } else if(s < 600 && s >= 500){
            $('header').css('height', '55%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.5)')
        } else if(s < 700 && s >= 600){
            $('header').css('height', '45%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.4)')
        } else if(s < 800 && s >= 700){
            $('header').css('height', '35%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.3)')
        } else if(s < 900 && s >= 800){
            $('header').css('height', '25%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.2)')
            $('.logo_y').css('opacity', '100%')
        } else if(s < 1000 && s >= 900){
            $('header').css('height', '15%')
            $('.logo_back').css('background', 'rgba(255, 255, 255,0.1)')
            $('.logo_y').css('opacity', '50%')
        } else if(s < 1100 && s >= 1000){
            $('header').css('height', '10%')
            $('.logo_back').css({background: 'rgba(255, 255, 255, 0)', height: '100%'})
            $('.logo_y').css('opacity', '0%')
        } else if(s >= 1100){
            $('header').css('height', '10%')
            $('.logo_back').css({background: 'rgba(255, 255, 255, 0)', height: '0%'})
            $('.logo_y').css('opacity', '0%')
        }
    }

    $('.btn_menu').click(function(){
        $('.menu').toggleClass('active')
        $(this).toggleClass('active')
    })

    /* 슬라이드는 슬릭..으로 하려구요..ㅠㅠ 시간 남으면 js로 하겠습니다..! */
});