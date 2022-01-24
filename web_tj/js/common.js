$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay : true,	
        autoplaySpeed : 3000, 
        pauseOnHover : true,
      });

      $(function(){
        $('#box .box_slide').each(function(){ 
            if($(window).width() < 769){ 
              var img = $(this).find('img');
              var img_pc = img.attr('src'); 
              var img_mo = img_pc.replace('_pc','_mo')
              img.attr('src',img_mo);
           }else{
              var img = $(this).find('img');
              var img_mo = img.attr('src'); 
              var img_pc = img_mo.replace('_mo','_pc')
                img.attr('src',img_pc);
              }
         })  
          $(window).resize(function(){
            // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
          $('#box .box_slide').each(function(){ 
            if($(window).width() < 769){ 
              var img = $(this).find('img');
              var img_pc = img.attr('src'); 
              var img_mo = img_pc.replace('_pc','_mo')
              img.attr('src',img_mo);
           }else{
              var img = $(this).find('img');
              var img_mo = img.attr('src'); 
              var img_pc = img_mo.replace('_mo','_pc')
                img.attr('src',img_pc);
              }
          })  
        })
        })
        $('.top').click(function(){
          event.preventDefault();
      
          $("html,body").stop().animate({scrollTop:0});
          });//menu.click() 끝
      
          $('.nav_btn').click(function(){
            $('#nav_mo').css({'top':'0'})
            })
            
            $('#nav_mo .close span').click(function(){
              $('#nav_mo').css({'top':'-110%'})
            })
            
	/*
	
	$("셀렉터1").이벤트(function(){
		$("셀렉터2")
		.animate({css속성:값},시간,움직임방식,콜백함수)	
	})
	
	*/

	// .open1을 클릭 -> .rightwrap이 보여짐. 자신의 left속성의 값을 0으로 이동시킴.
	$(".open1").click(function(){
		$(".rightwrap").animate({left:0},500,"swing")
		});
			
	$(".close1").click(function(){
		$(".rightwrap").animate({left:-300},500,"swing")
		});
		
	$('.depth1 > li').each(function() {
      var submenu = $(this).find('.sub');
      var submenu_link = $(this).children('a');
      $(submenu_link).click(function(){
        $('.depth1 .sub').slideUp();
         $(submenu).stop().slideToggle();
       })
	});		
	

      $(".menu_papa").mouseover(function() {		
        $(this).find('img').attr("src", $(this).find('img').attr("src").replace(".png","_on.png"));
      });	
      $(".menu_papa").mouseout(function() {
        $(this).find('img').attr("src", $(this).find('img').attr("src").replace("_on.png",".png"));
      });
    }); //end
