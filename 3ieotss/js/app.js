new Swiper('.slider', {
    speed: 2400,
    mousewheel: true,
    loop: true,
    spaceBetween:18,
    mousewheel:true,
    parallax: true,
    keyboard: true,

    
});

var backaudio = document.getElementById("backaudio");
  backaudio.volume = 0.5;
  backaudio.loop=true;
  backaudio.played=true;


  


document.onkeydown = checkKey;
function checkKey(e) {
     var right=document.getElementById("right");
     var left=document.getElementById("left");

     e = e || window.event;
 
     if (e.keyCode == '37') {
          left.play() // left arrow     
     }
     else if (e.keyCode == '39') {
        right.play() // right arrow   
     }
}