/*jslint indent: 4 */
/*global ClassFoo, ClassBar, prompt, $, console */
/*jslint white: true */

$(document).ready(function(){
"use strict"; 
    
var width=1000,
animationSpeed=2000,
pause=700,
currentSlide=1,
$slider=$("#slider"),
$slideContainer=$slider.find(".slides"),
$slides=$slideContainer.find(".slide"),
interval;
// 
function startSlider(){
    interval = setInterval(function(){
    $("#slider .slides").animate({"margin-left":"-="+width},animationSpeed,
       function() {
        currentSlide+=1;
    if(currentSlide === $slides.length){
        currentSlide=1;
        $slideContainer.css("margin-left", 0);
    }
        
        
        }                        
);}

,pause);
}
function pauseSlider(){
    clearInterval(interval);
}
$slider.on("mouseenter",pauseSlider).on("mouseleave",startSlider);
    
startSlider();
});


