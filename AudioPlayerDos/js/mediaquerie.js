//--------->delay function
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

var mediaquerie = function() {
    var pause = 10;
    // will only process code within delay(function() { ... }) every 100ms.

    $(window).resize(function() {
        delay(function() {
            var width = $(window).width();
            if( width >= 1025 ) {
                //::::::::: Desktop code :::::::::
				
				//--------> Link btn
				$('.link-btn').hover(
					function(){
						$('#title-'+$(this).attr('data-title')).addClass('active-title');
					},
					function() {
						$('#title-'+$(this).attr('data-title')).removeClass('active-title');
					}
				);
				
				//--------> Open Drop
				$('.open-drop').hover(
					function(){
                    $('#show'+$(this).attr('data-menu')).fadeIn();
					$('#menu'+$(this).attr('data-menu')).css({'top':'38px', 'opacity':'1', 'pointer-events': 'visible'});
                    
					},
					function() {
                    $('.show-block').stop().fadeOut();
					 $('.drop-menu').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
                    
					}
				);
               
                //-------> Login Drop
                $('#login-drop').hover(
					function(){
                    $(this).addClass('active-log');
                    $('.show-block-2').fadeIn();
					$('#login').css({'top':'33px', 'opacity':'1', 'pointer-events': 'visible'});
                    
					},
					function() {
                     $(this).removeClass('active-log');
                    $('.show-block-2').stop().fadeOut();
					 $('#login').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
					}
				);
                
                //------> Fix
                $('#login-drop .span-button').removeClass('active-log');
                $('.open-drop a').removeClass('active-btn');
                $('#login').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'1'});
                $('.news-list').addClass('action-scroll');
                $('#form-section').removeClass('fixed');
	          
                 //------> Insert
                $('.menu-icon-2').insertAfter('.menu-icon-1');
                $('.advance-option').insertBefore('.search');
                $('.option').insertAfter('.menu .clear');
                $('.menu').appendTo('.bottom-block');
                $('#show1').insertAfter('.b-mobile1');
                $('#show2').insertAfter('.b-mobile2');
                $('.show-block-2').insertAfter('#login-drop a');
                $('.tab-control').insertAfter('.label-span');
                $('#menu1 ').appendTo('#show1');
                $('#menu2 ').appendTo('#show2');
                $('.banner-product').addClass('banner-fixed');
               $('.menu-product ').removeClass('mobile-menu-action');
                $('.fix-top').removeClass('top-height');
                //-----> Productos
                $('#i1').appendTo('#iblock1');
                $('#i2').appendTo('#iblock2');
                
                //--->Inser Calendar ID   
                $('.calendar-block-2').each(function(){
                    $(this).prev('.option-calendar').appendTo(this);
                });
                
                //-------- >Prevent Default 
                $('.tab-control ul li a').attr('href','javascript:void(0)');
                $('.tab-control ul li a').removeClass('scrollto');
                
                
                //-------->Show info 
                $('.plus-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideDown();
                    $(this).parent().addClass('active-on');
                    $(this).fadeOut();
                    $(this).next().fadeIn();
                });
                $('.less-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideUp();
                    $(this).parent().removeClass('active-on');
                    $(this).fadeOut();
                    $(this).prev().fadeIn();
                });
                
                
                //-----> Plus
                $('.plus-c').click(function(){
                    $(this).parent().prev('.hide-contact').slideDown();
                    $(this).fadeOut();
                    $(this).next('.less-c').fadeIn();
                });
                $('.less-c').click(function(){
                    $(this).parent().prev('.hide-contact').slideUp();
                    $(this).fadeOut();
                    $(this).prev('.plus-c').fadeIn();
                });
                
                //-----> Session
                $('.view-1 .menu-icon-2').removeClass('active-user');
                $('.close-session').slideUp();
                
              
                
                 //-------> Change Scroll
                    var $sec = $(".action-scroll li"),
                            handle = null;
                        var $w = $(window).scroll(function () {
                            clearTimeout(handle);
                            handle = setTimeout(function() {
                                var top = $w.scrollTop();
                                var $f = $sec.filter(function() {
                                    return $(this).offset().top + $(this).height() - 233>= top; 

                                }).first().addClass('active-new');

                                $sec.not($f).removeClass('active-new');


                            }, 40);
                    }).scroll();
                
                
              
             
						
            } else if( width >= 701 && width <= 1024 ) {
                //::::::::: Tablet code :::::::::
				
				//-------->Disable hover event
					$('.open-drop a, .open-drop, #login-drop').hover(function(){
						}).off('mouseenter mouseleave');
					
				
				
				//---------> Open Drop
				$('.open-drop .down').click(function(){
                    //---->Remove
                    $('.show-block').stop().fadeOut();
					$('.drop-menu').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
					$('.open-drop .btn-mobile').css({'z-index':'0'});
					$('.open-drop a').removeClass('active-btn');
                    //----->Add
                    $('#show'+$(this).attr('data-menu')).fadeIn();
					$('#menu'+$(this).attr('data-menu')).css({'top':'38px', 'opacity':'1', 'pointer-events': 'visible'});
					$('#b-mobile'+$(this).attr('data-menu')).css({'z-index':'100'});
					$(this).addClass('active-btn');
                     $('#login-drop .span-button').removeClass('active-log');
                    $('.login-out').hide();
                    $('.show-block-2').fadeOut();
					$('#login').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
                    
				});
				
				
				//------> CLose drop`
				$('.open-drop .btn-mobile').click(function(){
                    $('.show-block').stop().fadeOut();
					$('.drop-menu').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
					$('.open-drop .btn-mobile').css({'z-index':'0'});
					$('.open-drop a').removeClass('active-btn');
				});
				
                
                 //------> Insert
                $('#menu1 ').appendTo('#show1');
                $('#menu2 ').appendTo('#show2');
                $('#login').appendTo('.show-block-2');
                $('.menu-icon-2').insertAfter('.menu-icon-1');
                $('.advance-option').insertBefore('.search');
                $('.option').insertAfter('.menu .clear');
                $('.menu').appendTo('.bottom-block');
                $('#show1').insertAfter('.b-mobile1');
                $('#show2').insertAfter('.b-mobile2');
                $('.show-block-2').insertAfter('#login-drop .span-button');
                $('.tab-control').insertAfter('.label-span');
                 $('.menu-product ul li:first-child').removeClass('open-product-menu');
                
                
                //--->Inser Calendar ID   
                $('.calendar-block-2').each(function(){
                    $(this).prev('.option-calendar').appendTo(this);
                });

                
                //-------> Fix
                $('.drop-menu').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
                $('.close-btn').fadeOut();
                $('.open-btn').fadeIn();
                $('#hide-2, #hide-3, .item').fadeIn();
                $('.link-out, .link-in, #hide-1').fadeOut();
                $('.open-drop a').removeClass('active-btn');
                $('.open-drop .btn-mobile').css({'z-index':'0'});
                $('.news-list').addClass('action-scroll');
                $('.banner-product').removeClass('.banner-fixed');
                $('#form-section').removeClass('fixed');
                $('.banner-product').removeClass('banner-fixed');
                $('.menu-product ').removeClass('mobile-menu-action');
                $('.fix-top').removeClass('top-height');
                //-----> Productos
                $('#i1').appendTo('#iblock1');
                $('#i2').appendTo('#iblock2');
                
                 //-------> Login Drop
                $('#login-drop .span-button').click(function(){
                    $(this).addClass('active-log');
                    $('.show-block').fadeOut();
                     $('.show-block-2').fadeIn();
					$('#login').css({'top':'33px', 'opacity':'1', 'pointer-events': 'visible'});
                    $('.login-out').show();
                    $('.drop-menu').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
					$('.open-drop .btn-mobile').css({'z-index':'0'});
					$('.open-drop a').removeClass('active-btn');
                    
					
                });
                 //-------> Login Drop Out
                $('.login-out').click(function(){
                  
                    $(this).hide();
                    $('.show-block-2').fadeOut();
                    $('#login-drop .span-button').removeClass('active-log');
					$('#login').stop().css({'top':'80px', 'opacity':'0', 'pointer-events': 'none'});
					
                });
                
                //-------- >Prevent Default 
                $('.tab-control ul li a').attr('href','javascript:void(0)');
                $('.tab-control ul li a').removeClass('scrollto');
                $('#target' + $(this).attr("data-target")).removeClass('nactive');  
                
                
                
                //-----> Plus
                $('.plus-c').click(function(){
                    $(this).parent().prev('.hide-contact').slideDown();
                    $(this).fadeOut();
                    $(this).next('.less-c').fadeIn();
                });
                $('.less-c').click(function(){
                    $(this).parent().prev('.hide-contact').slideUp();
                    $(this).fadeOut();
                    $(this).prev('.plus-c').fadeIn();
                });
                
               //-------->Show info 
                $('.plus-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideDown();
                    $(this).parent().addClass('active-on');
                    $(this).fadeOut();
                    $(this).next().fadeIn();
                });
                $('.less-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideUp();
                    $(this).parent().removeClass('active-on');
                    $(this).fadeOut();
                    $(this).prev().fadeIn();
                });
                
                
                //-----> Session
                $('.view-1 .menu-icon-2').removeClass('active-user');
                $('.close-session').slideUp();
               
               
                //-------> Change Scroll
                    var $sec = $(".action-scroll li"),
                            handle = null;
                        var $w = $(window).scroll(function () {
                            clearTimeout(handle);
                            handle = setTimeout(function() {
                                var top = $w.scrollTop();
                                var $f = $sec.filter(function() {
                                    return $(this).offset().top + $(this).height() - 233>= top; 

                                }).first().addClass('active-new');

                                $sec.not($f).removeClass('active-new');


                            }, 40);
                    }).scroll();
                
              
            } else if( width >= 321 && width <= 700 ) {
				//::::::::: Tablet mini Code :::::::::
                //------ Insert
                $('.menu-icon-2').insertBefore('.menu-icon-1');	
                $('.advance-option').insertBefore('.user-menu ul');
                $('.menu').insertAfter('.bottom-block');
                $('.drop-menu').insertAfter('.bottom-block');
                $('#login').insertAfter('.drop-menu');
                $('.tab-control').insertBefore('#form1');
                //--->Inser Calendar ID   
                $('.calendar-block-1').each(function(){
                    $(this).next().find('.option-calendar').insertAfter(this);
                });
                
               
                
               
                
                //..... View-1
                $('.view-1 .option').insertBefore('.advance-option');
                $('.view-2 .option').insertBefore('.user-menu ul');
                
                //-----> Fix
                $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('#login-drop a').removeClass('active-log');
                $('.close-btn').fadeOut();
                $('.open-btn').fadeIn();
                $('#login-drop .span-button').removeClass('active-log');
				$('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('.login-out').hide();
                $('.news-list').removeClass('action-scroll');
                $('.news-list li').addClass('active-new');
                $('#form-section').removeClass('fixed');
                $('.banner-product').removeClass('banner-fixed');
                $('.menu-product ').addClass('mobile-menu-action');
                $('.fix-top').removeClass('top-height');
                //-----> Productos
                $('#i1').appendTo('#title1');
                $('#i2').appendTo('#title2');
                
                //----->Open Menu 
                
                $('.open-btn').click(function(){
                    $(this).fadeOut();
                    $('.menu').css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});
                    $('.close-btn').fadeIn();
                    $('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.login-out').hide();
                    $('#login-drop .span-button').removeClass('active-log');
                    

                });
                //----->Close Menu 
                $('.close-btn').click(function(){
                    $(this).fadeOut();
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
                    $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.open-btn').fadeIn();
                });
                
                //---------> Open Drop
				$('.open-drop .down').click(function(){
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none','z-index':'0'});
                    //----->Add
					$('#menu'+$(this).attr('data-menu')).css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});
				});
                //-------->Close Drop
                $('.back-btn').click(function(){
					$('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none','z-index':'0'});
                    $('.menu').css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'100'});
				});
                
                //------->Tab Open
                $('.label').click(function(){
                    if($(this).hasClass('active-tab'))
                    {}
                    else {
                        $('.label').removeClass('active-tab');
                        $('.item').slideUp();
                        $('.hide-block').slideUp();
                        $('.link-in').fadeIn();
                        $('.link-out').fadeOut();
                        $(this).next('.item').slideDown();
                        $(this).addClass('active-tab');
                    }
                    
                });
                
                //----> Open Info
                $('.link-in').click(function(e){
                    $(this).fadeOut();
                    $('#hide-' +$(this).attr('data-div')).slideDown();
                    $('.link-out').fadeIn();
                });
                //----> Close Info
                $('.link-out').click(function(e){
                    $(this).fadeOut();
                    $('.hide-block').slideUp();
                    $('.link-in').fadeIn();
                });
                
                //-------> Login Drop
                $('#login-drop .span-button').click(function(){
					$('#login').css({'top':'100px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});
                    $('.login-out').show();
                    $('.close-btn').fadeOut();
                     $('.open-btn').fadeIn();
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $(this).addClass('active-log');
                });
                 //-------> Login Drop Out
                $('.login-out').click(function(){
                    $(this).hide();
                    $('#login-drop .span-button').removeClass('active-log');
					$('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
					
                });
                
                
                 //-------- >Prevent Default 
                $('.tab-control ul li a').attr('href','javascript:void(0)');
                $('.tab-control ul li a').removeClass('scrollto');
                $('#target' + $(this).attr("data-target")).removeClass('nactive');   
                
                
               
                //-----> Plus
                $('.plus-c').click(function(){
                    $(this).parent().next('.calendar-block-2').slideDown();
                    $(this).fadeOut();
                    $(this).next('.less-c').fadeIn();
                });
                $('.less-c').click(function(){
                    $(this).parent().next('.calendar-block-2').slideUp();
                    $(this).fadeOut();
                    $(this).prev('.plus-c').fadeIn();
                });
                
                //-----> Session
                $('.view-1 .menu-icon-2').click(function(){
                    $('.close-session').stop().slideToggle('fast');
                    $(this).toggleClass('active-user');
                   
                });
                
                
                //-----> Open Mobile Product 
                $('.mobile-menu-action ul li:first-child span').click(function(){
                    $(this).hide();
                    $('.close-menu-product').slideDown();
                     $('.menu-product').removeClass('mobile-menu-action');
                });
                $('.close-menu-product').click(function(){
                    $(this).slideUp();
                     $('.menu-product').addClass('mobile-menu-action');
                    $('.mobile-menu-action ul li:first-child span').show();
                    
                });
              
                
            } else if( width <= 320 ) {
                //:::::::: Iphone code 
                //------ Insert
                $('.menu-icon-2').insertBefore('.menu-icon-1');	
                $('.advance-option').insertBefore('.user-menu ul');
                $('.menu').insertAfter('.bottom-block');
                $('.drop-menu').insertAfter('.bottom-block');
                $('#login').insertAfter('.drop-menu');
                $('.tab-control').insertBefore('#form1');
               //--->Inser Calendar ID   
                $('.calendar-block-1').each(function(){
                    $(this).next().find('.option-calendar').insertAfter(this);
                });
                
                //..... View-1
                $('.view-1 .option').insertBefore('.advance-option');
                $('.view-2 .option').insertBefore('.user-menu ul');
                
                //-----> Fix
                $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('#login-drop .span-button').removeClass('active-log');
                $('.close-btn').fadeOut();
                $('.open-btn').fadeIn();
                $('#login-drop .span-button').removeClass('active-log');
				$('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none'});
                $('.login-out').hide();
                $('.news-list li').removeClass('action-scroll');
                $('.news-list li').addClass('active-new');
                $('#form-section').addClass('fixed');
                $('.banner-product').addClass('banner-fixed');
                $('.menu-product ').addClass('mobile-menu-action');
                //-----> Productos
                $('#i1').appendTo('#title1');
                $('#i2').appendTo('#title2');
                
                //----->Open Menu 
                
                $('.open-btn').click(function(){
                    $(this).fadeOut();
                    $('.menu').css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});
                    $('.close-btn').fadeIn();
                    $('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.login-out').hide();
                    $('#login-drop .span-button').removeClass('active-log');
                    

                });
                //----->Close Menu 
                $('.close-btn').click(function(){
                    $(this).fadeOut();
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
                    $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.open-btn').fadeIn();
                });
                
                //---------> Open Drop
				$('.open-drop .down').click(function(){
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none','z-index':'0'});
                    //----->Add
					$('#menu'+$(this).attr('data-menu')).css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});				       });
                //-------->Close Drop
                $('.back-btn').click(function(){
					$('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none','z-index':'0'});
                    $('.menu').css({'top':'101px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'100'});
				});
                
                //------->Tab Open
                $('.label').click(function(){
                    if($(this).hasClass('active-tab'))
                    {}
                    else {
                        $('.label').removeClass('active-tab');
                        $('.item').slideUp();
                        $('.hide-block').slideUp();
                        $('.link-in').fadeIn();
                        $('.link-out').fadeOut();
                        $(this).next('.item').slideDown();
                        $(this).addClass('active-tab');
                    }
                    
                });
                
                //----> Open Info
                $('.link-in').click(function(e){
                    $(this).fadeOut();
                    $('#hide-' +$(this).attr('data-div')).slideDown();
                    $('.link-out').fadeIn();
                });
                //----> Close Info
                $('.link-out').click(function(e){
                    $(this).fadeOut();
                    $('.hide-block').slideUp();
                    $('.link-in').fadeIn();
                });
                
                //-------> Login Drop
                $('#login-drop .span-button').click(function(){
					$('#login').css({'top':'100px', 'opacity':'1', 'pointer-events': 'visible', 'z-index':'1000'});
                    $('.login-out').show();
                    $('.close-btn').fadeOut();
                     $('.open-btn').fadeIn();
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $('.drop-menu').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'0'});
                    $(this).addClass('active-log');
                });
                 //-------> Login Drop Out
                $('.login-out').click(function(){
                    $(this).hide();
                    $('#login-drop .span-button').removeClass('active-log');
					$('#login').stop().css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
                    $('.menu').css({'top':'130px', 'opacity':'0', 'pointer-events': 'none', 'z-index':'100'});
					
                });
                
                //-----> Plus
                $('.plus-c').click(function(){
                    $(this).parent().next('.calendar-block-2').slideDown();
                    $(this).fadeOut();
                    $(this).next('.less-c').fadeIn();
                });
                $('.less-c').click(function(){
                    $(this).parent().next('.calendar-block-2').slideUp();
                    $(this).fadeOut();
                    $(this).prev('.plus-c').fadeIn();
                });
                
                //-----> Session
                $('.view-1 .menu-icon-2').click(function(){
                    $('.close-session').stop().slideToggle('fast');
                    $(this).toggleClass('active-user');
                });
                
            
                //-----> Open Mobile Product 
                $('.mobile-menu-action ul li:first-child span').click(function(){
                    $(this).hide();
                    $('.close-menu-product').slideDown();
                     $('.menu-product').removeClass('mobile-menu-action');
                    $('.fix-top').addClass('top-height');
                });
                $('.close-menu-product').click(function(){
                    $(this).slideUp();
                     $('.menu-product').addClass('mobile-menu-action');
                    $('.mobile-menu-action ul li:first-child span').show();
                    $('.fix-top').removeClass('top-height');
                });
                
                
                //-------- >Prevent Default 
                $('.tab-control ul li a').attr('href','#form-section');
                //------> Scroll To
                $(function() {
                     $('.tab-control ul li a').addClass('scrollto');
                     $('.scrollto').click(function() {

                                    $('#target' + $(this).attr("data-target")).addClass('nactive');
                                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                                      var target = $(this.hash);
                                      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                                      if (target.length) {
                                        $('html,body').animate({
                                          scrollTop: target.offset().top
                                        }, 1000);
                                        return false;
                                      }
                                    }
                         });
                 });
            
            }
			
        }, pause );
    });

    $(window).resize();
}

//------> IE detection
function isIE( version, comparison ){
    var $div = $('<div style="display:none;"/>').appendTo($('body'));
    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
    var ieTest = $div.find('a').length;
    $div.remove();
    return ieTest;
}

 
$(document).ready(function() {
 
       
    
               
    
 
	if(isIE(8)) 
		{ 
		
             //::::::::: Desktop code :::::::::
                //Fix
				
				//--------> Link btn
				$('.link-btn').hover(
					function(){
						$('#title-'+$(this).attr('data-title')).addClass('active-title');
					},
					function() {
						$('#title-'+$(this).attr('data-title')).removeClass('active-title');
					}
				);
				
				//--------> Open Drop
				$('.open-drop').hover(
					function(){
                    $('#show'+$(this).attr('data-menu')).fadeIn();
					$('#menu'+$(this).attr('data-menu')).css({'top':'38px'}).fadeIn();
                    
					},
					function() {
                    $('.show-block').stop().fadeOut();
					 $('.drop-menu').stop().css({'top':'80px'}).fadeOut;
                    
					}
				);
               
                //-------> Login Drop
                $('#login-drop').hover(
					function(){
                    $('.show-block-2').fadeIn();
                    $(this).addClass('active-log');
					$('#login').show().css({'top':'33px'});
					},
					function() {
                    $('.show-block-2').fadeOut();
                     $(this).removeClass('active-log');
					 $('#login').hide().css({'top':'80px'});
					}
				);
                
                
	           //---->Prevent
                $('.span-img a').click(function(e){
                    e.preventDefault();
                });
            
                $('.s1-form').css({'position':'relative'});
                 //---------- Form Section -------->
                $('.tab-control ul li a').click(function(){
                   $('.s1-form').hide();
                   $('#form'+$(this).attr('data-div')).show;
                   $('.tab-control ul li a').removeClass('active-tab');
                    $(this).addClass('active-tab');
                });
            
            //-------->Show info 
                $('.plus-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideDown();
                    $('#txt'+$(this).attr('data-new')).slideDown();
                    $(this).parent().addClass('active-on');
                    $(this).fadeOut();
                    $(this).next().fadeIn();
                });
                $('.less-btn').click(function(){
                    $(this).parent().prev('.info-hide').slideUp();
                    $('#txt'+$(this).attr('data-new')).slideUp();
                    $(this).parent().removeClass('active-on');
                    $(this).fadeOut();
                    $(this).prev().fadeIn();
                });
            
            //-----> Plus
            $('.show-contact').click(function(){
                        $(this).parent().prev('#c2').slideDown();
                        $(this).fadeOut();
                        $(this).next('.hide-to-contact').fadeIn();
            });
            $('.hide-to-contact').click(function(){
                        $(this).parent().prev('#c2').slideUp();
                        $(this).fadeOut();
                        $(this).prev('.show-contact').fadeIn();
            });
            
             //----------------> Contact slide
                    $('.region-zone').click(function(){
                        $(this).next('.contact-zone').stop().slideToggle();
                        $(this).parent().next('.contact-span-b').stop().slideToggle();
                    });
	
				
	} else {
        
        //---->MediaQuerie
		mediaquerie();
        
        
        //---------- Form Section -------->
        $('.tab-control ul li a').click(function(){
           $('.s1-form').removeClass('active-form');
           $('#form'+$(this).attr('data-div')).addClass('active-form');
           $('.tab-control ul li a').removeClass('active-tab');
            $(this).addClass('active-tab');
        });
        
        //----->Lightbox
        $('.blocked-zone').click(function(e){
            $('.lightbox').fadeIn('slow');
            e.preventDefault();
        });
        
        //----->Close
        $('.close-lightbox').click(function(){
            $('.lightbox').fadeOut('slow');
        });
        
        //-----> Plus
        $('.show-contact').click(function(){
                    $(this).parent().prev('#c2').slideDown();
                    $(this).fadeOut();
                    $(this).next('.hide-to-contact').fadeIn();
        });
        $('.hide-to-contact').click(function(){
                    $(this).parent().prev('#c2').slideUp();
                    $(this).fadeOut();
                    $(this).prev('.show-contact').fadeIn();
        });
        
        
        //-----Scroll To
        $('.blocked-zone').click(function(){	
		 	 var width = $(window).width();		
		 if (width < 801) {  	
	               $('#target' + $(this).attr("data-target")).addClass('nactive');
                        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                          var target = $(this.hash);
                          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                          if (target.length) {
                            $('html,body').animate({
                              scrollTop: target.offset().top
                            }, 1000);
                            return false;
                          }
                        }
			
		          }
		 });
        
        
         
        $(document).each(function(){	
		 	 var width = $(window).width();		
             if (width >= 1025) {  	
                    
                //----> Filter Search
                $('.filter-search li a').click(function(){
                    $('.filter-search li').removeClass('active-filter');
                    $('.filter-search form').removeClass('active-search');
                    $(this).next().addClass('active-search');
                    $(this).parent().addClass('active-filter');
                    $(this).prev('.close').show();
                });
             
                } else if (width >= 701 && width <= 1024){
                
                   //----> Filter Search
                    $('.filter-search li a').click(function(){
                        $('.filter-search li').removeClass('active-filter');
                        $('.filter-search form').removeClass('active-search');
                        $(this).next().addClass('active-search');
                        $(this).parent().addClass('active-filter');
                        $(this).prev('.close').show();
                    });
                
                
                } else if (width >= 321 && width <= 700){
                
                    //-------->Show info 
                    $('.plus-btn').click(function(){
                        // Remove
                        $('.news-photo').css({'height':'200px'});
                        $('.inside-txt1').slideUp();
                        $('.info-hide').slideUp();
                        $('.less-btn').fadeOut();
                        $('.plus-btn').fadeIn();
                        // Add
                        $(this).parent().prev('.info-hide').slideDown();
                        $('#txt'+$(this).attr('data-new')).slideDown();
                        $('#photo'+$(this).attr('data-new')).css({'height':'400px'});
                        $(this).parent().addClass('active-on');
                        $(this).fadeOut();
                        $(this).next().fadeIn();
                    });
                    $('.less-btn').click(function(){
                        $(this).parent().prev('.info-hide').slideUp();
                        $('#txt'+$(this).attr('data-new')).slideUp();
                        $('#photo'+$(this).attr('data-new')).css({'height':'200px'});
                        $(this).parent().removeClass('active-on');
                        $(this).fadeOut();
                        $(this).prev().fadeIn();
                    });
                    
                    
                    //----------------> Contact slide
                    $('.region-zone').click(function(){
                        $(this).next('.contact-zone').stop().slideToggle();
                        $(this).parent().next('.contact-span-b').stop().slideToggle();
                    });
                
                    
                    //----> Filter Search
                    $('.filter-search li a').click(function(){
                        $('.filter-search form').removeClass('active-search');
                        $(this).next().addClass('active-search');
                        $(this).prev('.close').show();
                    });
                
                
                } else if (width <= 320){
                    
                  
                    //-------->Show info 
                    $('.plus-btn').click(function(){
                        // Remove
                        $('.news-photo').css({'height':'200px'});
                        $('.inside-txt1').slideUp();
                        $('.info-hide').slideUp();
                        $('.less-btn').fadeOut();
                        $('.plus-btn').fadeIn();
                        // Add
                        $(this).parent().prev('.info-hide').slideDown();
                        $('#txt'+$(this).attr('data-new')).slideDown();
                        $('#photo'+$(this).attr('data-new')).css({'height':'400px'});
                        $(this).parent().addClass('active-on');
                        $(this).fadeOut();
                        $(this).next().fadeIn();
                    });
                    $('.less-btn').click(function(){
                        $(this).parent().prev('.info-hide').slideUp();
                        $('#txt'+$(this).attr('data-new')).slideUp();
                        $('#photo'+$(this).attr('data-new')).css({'height':'200px'});
                        $(this).parent().removeClass('active-on');
                        $(this).fadeOut();
                        $(this).prev().fadeIn();
                    });
                    
                    //----------------> Contact slide
                    $('.region-zone').click(function(){
                        $(this).next('.contact-zone').stop().slideToggle();
                        $(this).parent().next('.contact-span-b').stop().slideToggle();
                    });
                    
                    //----> Filter Search
                    $('.filter-search li a').click(function(){
                        $('.filter-search form').removeClass('active-search');
                        $(this).next().addClass('active-search');
                        $(this).prev('.close').show();
                    });
                
                
                }
            
            
             });
    
        
       
    
	}
 
    
});	
