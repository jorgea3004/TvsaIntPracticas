
$(document).ready(function(){


            // Calendar 
            $(document).each(function(){	
                 var width = $(window).width();		
                 if (width >= 1025) {  	
                         //------->Scroll To Event
                        $('html, body').animate({scrollTop:$('#active-date').position().top }, 'slow');
                        

                    } else if (width >= 701 && width <= 1024){


                         //------->Scroll To Event
                        $('html, body').animate({scrollTop:$('#active-date').position().top + 215 }, 'slow');


                    } else if (width >= 321 && width <= 700){


                          //------->Scroll To Event
                        $('html, body').animate({scrollTop:$('#active-date').position().top + 150 }, 'slow');


                    } else if (width <= 320){

                        //------->Scroll To Event
                      $('html, body').animate({scrollTop:$('#active-date').position().top  }, 'slow');



                    }
            
            });
    
            
});