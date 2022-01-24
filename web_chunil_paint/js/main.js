$(function(){

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true,
        pauseOnDotsHover:true,
        autoplay:true,
        autoplaySpeed :2000,
        pauseOnHover : true,
        swipe : true,        //모바일_ 스와이프 가능
swipeToSlide : true,   //모바일_스와이프 가능
touchMove : true,      //모바일_손가락터치시 슬라이드
        responsive: [                   
          {  breakpoint: 768,     //사이즈가 1200이하면 슬라이드개수를 줄이는 방식 
                 settings: {
                  dots:false,
                 }
            }]
      });

      $(".vertical-center-3").slick({
        infinite: true,
        vertical: true,
        pauseOnHover : true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnDotsHover:true,
        autoplay : true
      });
      
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        pauseOnHover : true,
        pauseOnDotsHover:true,
        slidesToScroll: 1,
        autoplay : true,
        responsive: [                   
          {  breakpoint: 1300,     //사이즈가 1200이하면 슬라이드개수를 줄이는 방식 
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
            }, {  breakpoint: 1180,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
            },{ breakpoint: 768,     
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
    ] 
      });

      $(window).scroll(function(){ 
        if ($(document).scrollTop() >= 500 && $(document).scrollTop() <= 4500){  
          $('#top').fadeIn(); 
        }
       // else if ($(document).scrollTop() >= 3000){
     //     $('#quick').fadeOut();
      //  }
        else {
          $('#top').fadeOut();
        } 
      })//window scroll
  
         /*네비 검정화면*/
       $('#nav .depth1 >li').mouseenter(function(){
          $('.nav_back').stop().fadeIn(100);
        })//enter
        $('#nav .depth1 >li, #nav .depth2').mouseleave(function(){
         $('.nav_back').stop().fadeOut();
        })//leave

      var a = 1; 
      $('.btn_all').click(function(){
          if (a == 1) {
              $(this).addClass('on');
              $('.box').slideDown();
              $('.btn_all').css('position','fixed')
              a = 2;
              
          } 
          else{
              $(this).removeClass('on');
              $('.box').slideUp();
              $('.btn_all').css('position','absolute')
              a = 1;
          }  
      })       

      	
	$('.top').click(function(){
		event.preventDefault();

		$("html,body").stop().animate({scrollTop:0});
		});

    $('#pop_up button').click(function(){ //사라지기 fade out, slide up -> display:none
      $('#pop_up').hide();
    })//modal close
    $('.modal').click(function(){ //나타나기 fade in, slide down -> display:block
      $('#pop_up').show();
    })//modal open 

    $('.modal_mom a').click(function () {
      return false;
});

$(".sns a").mouseover(function() {		
  $(this).find('img').attr("src", $(this).find('img').attr("src").replace(".png","_on.png"));
});	
$(".sns a").mouseout(function() {
  $(this).find('img').attr("src", $(this).find('img').attr("src").replace("_on.png",".png"));
});



  })//end



