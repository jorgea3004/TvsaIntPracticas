$(document).ready(function() {

        //-----> Time function 
        $(".banner-product").everyTime(10, function(){						 
             $('.banner-product img').delay(10000).animate({"width":"150%","left":"50%", "margin-left":"-75%"}, 10000).delay(5000).animate({"width":"100%","left":"50%", "margin-left":"-50%"}, 10000);	
		  });
          
});