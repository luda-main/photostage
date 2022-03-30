


const el_body = document.querySelector('body');
const el_navigation_opener = document.querySelector('.header__burger-menu');
const body = document.querySelector('body');

// IE 11 Support for nodelist.foreach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}   

var vw = window.innerWidth;
var vh = window.innerHeight;
var scrollTop = 0;

window.addEventListener("resize",function(){
  vw = window.innerWidth;
  vh = window.innerHeight;
  
});

var vw = window.innerWidth;
var vh = window.innerHeight;
var scrollTop = 0;

window.addEventListener("resize",function(){
  vw = window.innerWidth;
  vh = window.innerHeight;
  
});
var navigation_tween = gsap.timeline({paused:true, defaults:{duration:0.5}}) 
  .to(".header__container__burger-content", {x:0, duration:0.5})
  .to(".burger-content__header", {background:"#000000"},"<")
  .to(".middle", {x:-10, width:0},"<")
  .to(".navigation-mask", {y:25},"<")
  .add(function() {
    // save scrollposition and restore it on reverse animation
    if(!navigation_tween.reversed())
      scrollTop = window.scrollY;

    el_body.className = (el_body.className == "modal-open") ? "" : "modal-open";
    
    if(navigation_tween.reversed())
      window.scroll(0, scrollTop);    
  })
  .to(".top", {rotate:45,y:9})
  .to(".bottom", {rotate:-45, y:-6, width:49},"<")
  .to(".middle", {y:0, height:0, duration:0, ease:Sine.easeIn},"<")
  .to(".navigation-mask", {y:"+="+vh, duration:0, ease:Sine.easeIn},"<")
;

function navigationOpener(callback){
  if(el_body.className == "modal-open")
  {
    navigation_tween.eventCallback("onReverseComplete", callback);
    navigation_tween.reverse(0);
  }else{
    navigation_tween.play();
  }
}
el_navigation_opener.addEventListener("click", function() {
  navigationOpener();
});

document.querySelectorAll(".header__container__burger-content a").forEach(function(elem){
  elem.addEventListener("click", function() {

    if(el_body.className == "modal-open"){
      navigationOpener(
        gsap.to.bind("null",window, {duration: 1, scrollTo: this.getAttribute("href")})
      );
    }else{
      gsap.to(window, {duration: 1, scrollTo: this.getAttribute("href")});
    }
 
  });
 });

 var tl = gsap.timeline();
 tl.from(".h1, .btn", {opacity:0, duration:1, y:20});
 tl.from(".h2, .gallary__shape__photos__first", {opacity:0, y:20});
 tl.from(".gallary__shape__photos__second, .gallary__shape__photos__third, .section-hero__container__gallary-paragraph", {y:20, opacity:0, stagger:0.5});
 
 
 var restart = document.querySelector(".header__burger-menu");
 var tlSecond = gsap.timeline({paused:true});
 
 tlSecond.from(".nav", {opacity:0, duration:0.9, y:20});
 tlSecond.from(".burger-content__social, .burger-content__second-column", {opacity:0, y:20});
 restart.onclick = function(){
   tlSecond.restart();
 };



 var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,},
});