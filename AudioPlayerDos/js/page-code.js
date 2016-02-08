$(document).ready(function() {
			
			//--------> fix placeholder
			$(function() {
				var input = document.createElement("input");
					if(('placeholder' in input)==false) { 
						$('[placeholder]').focus(function() {
							var i = $(this);
							if(i.val() == i.attr('placeholder')) {
								i.val('').removeClass('placeholder');
								if(i.hasClass('password')) {
									i.removeClass('password');
									this.type='password';
								}			
							}
						}).blur(function() {
							var i = $(this);	
							if(i.val() == '' || i.val() == i.attr('placeholder')) {
								if(this.type=='password') {
									i.addClass('password');
									this.type='text';
								}
								i.addClass('placeholder').val(i.attr('placeholder'));
							}
						}).blur().parents('form').submit(function() {
							$(this).find('[placeholder]').each(function() {
								var i = $(this);
								if(i.val() == i.attr('placeholder'))
									i.val('');
							})
						});
				}
		});
    
        
       
    
        //-----> append input
        
        //--- 1
        $('#form1 .add-btn').click(function(){
            $('#form1 .part3').append("<div><!-- invite --><label>Actores invitados</label><input type='text' name='invite'></div>");
        });
        //--- 2
        $('#form2 .add-btn').click(function(){
            $('#form2 .part3').append("<div><!-- invite --><label>Actores invitados</label><input type='text' name='invite'></div>");
        });
        //--- 3
        $('#form3 .add-btn').click(function(){
            $('#form3 .part3').append("<div><!-- invite --><label>Actores invitados</label><input type='text' name='invite'></div>");
        });
        //--- 4
        $('#form4 .add-btn').click(function(){
            $('#form4 .part3').append("<div><!-- invite --><label>Nombre del visitante</label><input type='text' name='invite'></div>");
        });
    
        

        //--- 2
        $('#form2 .add-date').click(function(){
            $('#form2 .part9').append("<div><label>Otra opción</label><input type='date' name='dateother' class='date-time'></div>");
            if ( $('.date-time')[0].type != 'date' ) $('.date-time').datepicker();

        });
        //--- 4
        $('#form4 .add-date').click(function(){
            $('#form4 .part9').append("<div><label>Otra opción</label><input type='date' name='dateother' class='date-time'></div>");
            if ( $('.date-time')[0].type != 'date' ) $('.date-time').datepicker();
        });
    
    
        
        
    
    
    
        //----->Slide Contact
        //------- 1 ----
        $('#slide1 .next-slide').click(function(){
            $('#slide1').removeClass('active-slide');
            $('#slide2').addClass('active-slide');
            $('.list1').removeClass('active-list');
            $('.list2').addClass('active-list');
            $('#slide2 .next-slide').fadeIn();
            $('#slide2 .before-slide').fadeOut();
        });
        //------- 2 ----
        $('#slide2 .next-slide').click(function(){
            $('#slide2').removeClass('active-slide');
            $('#slide3').addClass('active-slide');
            $('.list2').removeClass('active-list');
            $('.list3').addClass('active-list');
            $('#slide3 .next-slide').fadeIn();
            $('#slide3 .before-slide').fadeOut();
        });
       //------- 3 ----
        $('#slide3 .next-slide').click(function(){
            $('#slide3').removeClass('active-slide');
            $('#slide4').addClass('active-slide');
            $('.list3').removeClass('active-list');
            $('.list4').addClass('active-list');
            $('#slide4 .next-slide').fadeIn();
            $('#slide4 .before-slide').fadeOut();
        });
        //------- 4 ----
        $('#slide4 .next-slide').click(function(){
            $('#slide4').removeClass('active-slide');
            $('#slide5').addClass('active-slide');
            $('.list4').removeClass('active-list');
            $('.list5').addClass('active-list');
            $('#slide5 .next-slide').fadeIn();
            $('#slide5 .before-slide').fadeOut();
        });
        //------- 5 ----
        $('#slide5 .next-slide').click(function(){
            $('#slide5').removeClass('active-slide');
            $('#slide6').addClass('active-slide');
            $('.list5').removeClass('active-list');
            $('.list6').addClass('active-list');
            $('#slide6 .next-slide').fadeIn();
            $('#slide6 .before-slide').fadeOut();
        });
        //------- 6 ----
        $('#slide6 .next-slide').click(function(){
            $('#slide6').removeClass('active-slide');
            $('#slide7').addClass('active-slide');
            $('.list6').removeClass('active-list');
            $('.list7').addClass('active-list');
            $('#slide7 .before-slide').fadeIn();
        });
        //------- 7 ----
        $('#slide7 .before-slide').click(function(){
            $('#slide7').removeClass('active-slide');
            $('#slide6').addClass('active-slide');
            $('.list7').removeClass('active-list');
            $('.list6').addClass('active-list');
            $('#slide6 .next-slide').fadeOut();
            $('#slide6 .before-slide').fadeIn();
            
        });
         //-------  -6 ----
        $('#slide6 .before-slide').click(function(){
            $('#slide6').removeClass('active-slide');
            $('#slide5').addClass('active-slide');
            $('.list6').removeClass('active-list');
            $('.list5').addClass('active-list');
            $('#slide5 .next-slide').fadeOut();
            $('#slide5 .before-slide').fadeIn();
            
        });
        //-------  -5 ----
        $('#slide5 .before-slide').click(function(){
            $('#slide5').removeClass('active-slide');
            $('#slide4').addClass('active-slide');
            $('.list5').removeClass('active-list');
            $('.list4').addClass('active-list');
            $('#slide4 .next-slide').fadeOut();
            $('#slide4 .before-slide').fadeIn();
            
        });
        //-------  -4 ----
        $('#slide4 .before-slide').click(function(){
            $('#slide4').removeClass('active-slide');
            $('#slide3').addClass('active-slide');
            $('.list4').removeClass('active-list');
            $('.list3').addClass('active-list');
            $('#slide3 .next-slide').fadeOut();
            $('#slide3 .before-slide').fadeIn();
            
        });
        //-------  -3 ----
        $('#slide3 .before-slide').click(function(){
            $('#slide3').removeClass('active-slide');
            $('#slide2').addClass('active-slide');
            $('.list3').removeClass('active-list');
            $('.list2').addClass('active-list');
            $('#slide2 .next-slide').fadeOut();
            $('#slide2 .before-slide').fadeIn();
            
        });
        //-------  -2 ----
        $('#slide2 .before-slide').click(function(){
                $('#slide2').removeClass('active-slide');
                $('#slide1').addClass('active-slide');
                $('.list2').removeClass('active-list');
                $('.list1').addClass('active-list');
               

        });

    
    
        
    
        //----> Filter Search
        $('.close').click(function(){
             $(this).hide();
            $('.filter-search li').removeClass('active-filter');
            $('.filter-search form').removeClass('active-search');
            
        });
    
        $('.navigate-product ul li a').click(function(){
            $('.navigate-product ul li a').removeClass('active-dott');
            $(this).addClass('active-dott');
        });
    
        //----> Open sinopsis
        $('.open-sinopsis').click(function(){
            $(this).parent().prev('.hide-e').slideToggle();
            $(this).toggleClass('close-sinopsis');
        });
    
    
        //----> Scroll To
        $(function() {
             $('.clase, .navigate-product ul li a').click(function() {

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
    
    

    
});

    