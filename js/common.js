//세로스크롤링
/*(function($){
    $.aniPage=function(e,type){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }

    };
})(jQuery);*/
$(function(){

  var menu = $(".gnb > li");
	var content = $(".content > section");
	
	menu.click(function(){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		event.preventDefault();
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;

		//스크롤이 tt의 값에 맞게 움직이게
		$("html,body").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(window).scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop();
		
		content.each(function() {
			//반복문(each)
      var tg = $(this);
			var idx = tg.index();
			
			if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}

    });//each() 끝
		
			
			});//scroll() 끝
  /*  $(window).height();
    $.aniOk=0;
    $(window).scrollTop(0);*/

   //웹슬라이더
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      autoplay : true,
      autoplaySpeed : 3000, 
      pauseOnHover : true,
      dots : true, 
    });

    jQuery('#design a').click(function (event) {
      event.preventDefault();
});

//웹프로젝트 팝업
$('.web_guide a').click(function(){
  $('.chunil_style').fadeIn();
  $('html').css({'overflow':'hidden'});
}) //web guide click

$('.web_close').click(function(){
  $('.chunil_style').fadeOut();
  $('html').css('overflow','auto');
})

jQuery('.web_guide a').click(function (event) {
  event.preventDefault();
});

$('.nav_btn').click(function(){
$('#nav_mo').css({'right':'0'})
})

$('#nav_mo .close span').click(function(){
  $('#nav_mo').css({'right':'-100%'})
})


$('.top').click(function(){
  event.preventDefault();

  $("html,body").stop().animate({scrollTop:0});
  });//menu.click() 끝

  
    //top버튼 일부 사라져
    $(window).scroll(function(){ 
      if ($(document).scrollTop() >= 500 && $(document).scrollTop() <= 12000){  
        $('.top').fadeIn(); 
      }
     // else if ($(document).scrollTop() >= 3000){
   //     $('#quick').fadeOut();
    //  }
      else {
        $('.top').fadeOut();
      } 
    })//window scroll


    var cont= $('.content').offset().top;
    // alert(cont);
     $(window).scroll(function(){ //윈도우 스크롤을 하면
       if ($(document).scrollTop() >= cont){
         $('.logo a').css({background: "url('images/logo_brown.png') no-repeat"})  //if 만약에 도큐먼트 스크롤탑이 300보다 크거나 같으면
       }
       else {
         $('.logo a').css({background: "url('images/logo_white.png') no-repeat"}) //300보다 작으면
       }
       
     })//window scroll
     

        $('.panels li').click(function(){
          var img = $(this).find('img');
          var a_href = img.attr('title')
          var text_1 = $(this).attr('alt')
          $('.full_zoom').fadeIn();
          $('.full_zoom .img img').attr('src',a_href)
          $('.full_zoom .txt').attr('alt',text_1)       
          $('html').css({'overflow':'hidden'});
          $('.full_zoom .button').click(function(){
              $('.full_zoom').fadeOut();
              a_href = "";
              $('.full_zoom .img img').attr('src',a_href)
                $('html').css({'overflow':'auto'});
           }) //닫기버튼
        })//그림띄우기



        $('.tabSet').each(function(){   //this = .tabSet
          var anchor = $(this).find('.tabs a');
          var anchor_on = $(this).find('.tabs a.on');
          var href_on = anchor_on.attr('href');
          var panel_all = $(this).find('.panel');
          
          $(href_on).show();
  
          anchor.each(function(){ //this = .tabs a
            var href = $(this).attr('href');
  
            $(this).click(function(){   //this = 클릭된 .tabs a 
              panel_all.hide(); 
              anchor.removeClass('on')
              $(this).addClass('on')
              $(href).show();
            })
          })
       })
    });   //jquery 전체

$(document).on("mousewheel DOMMouseScroll",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e,e.type);
        $.aniOk = 1;
    }
});

