<!doctype html>
<html lang="es">
    <head>
        <meta charset="ISO-9958-1" />
        <meta description="Mi sitio" />
        <title>Videos</title>
	    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript" class="rs-file" src="http://localhost/televisainternacional/public/externalScripts/jquery.royalslider.min.js"></script>
    </head>
	<body>
        <div id="gallery">
            <iframe src="http://amp.televisa.com/embed/embed_internacional.php?id=250682"></iframe>
        </div><script id="addJS">
             jQuery(document).ready(function($) {
                   $('#gallery').royalSlider({
                      arrowsNav: false,
                      fadeinLoadedSlide: true,
                      controlNavigationSpacing: 0,
                      controlNavigation: 'thumbnails',
                      thumbs: {
                        autoCenter: false,
                        fitInViewport: true,
                        orientation: 'vertical',
                        spacing: 0,
                        paddingBottom: 0
                      },
                      slidesSpacing: 0,
                      loop: false,
                      loopRewind: true,
                      numImagesToPreload: 3,
                      sliderDrag:false,
                      navigateByClick:false,
                      autoScaleSlider: true,
                      video: {
                          autoHideArrows:true,
                          autoHideControlNav:false,
                          autoHideBlocks: true
                        }
                   });
                    var slider = $("#gallery").data('royalSlider');
slider.ev.on('rsOnCreateVideoElement', function(e, url) {
// url - path to video from data-rsVideo attribute
// slider.videoObj - jQuery object that holds video HTML code
// slider.videoObj must be IFRAME, VIDEO or EMBED element, or have class rsVideoObj

slider.videoObj = $('<h1>Hello world. You should put here your code for video player. Video URL is:' + url + '</h1>');

});
                    });
        </script>	</body>
</html>