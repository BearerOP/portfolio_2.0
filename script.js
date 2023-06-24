// Preloader
var preloader =  document.getElementById('loading');

function firstLoad() {
    preloader.style.display = 'none';
}


// Fractal Tree

let angle = 0;

function setup() {
  createCanvas(250, 250);
  angle =PI/4;
}

function draw() {
  background(0,31,32);
  stroke(204,214,246);
  strokeWeight(.8);
  translate(125,height);
  angle=map(cos(frameCount*0.01),-1,1,PI/2,PI/16);
  branch(60);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.69);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.69);
    pop();
  }
}

// Scroll Reveal

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal(".intro");
ScrollReveal().reveal(".about-me-content", { delay: 100 });
ScrollReveal().reveal(".nav-link1", { delay: 600 });
ScrollReveal().reveal(".nav-link2", { delay: 700 });
ScrollReveal().reveal(".nav-link3", { delay: 800 });
ScrollReveal().reveal(".nav-link4", { delay: 900 });
ScrollReveal().reveal(".profile-image", { delay: 300 ,origin :'right'});
ScrollReveal().reveal(".tech1", { delay: 300 });
ScrollReveal().reveal(".tech2", { delay: 400 });
ScrollReveal().reveal(".tech3", { delay: 500 });
ScrollReveal().reveal(".desc-list1", { delay: 500 });
ScrollReveal().reveal(".container-img", { delay: 400 });
ScrollReveal().reveal(".software-projects", { delay: 200 });
ScrollReveal().reveal(".footer", { delay: 200 });
ScrollReveal().reveal(".row11", { delay: 100 });
ScrollReveal().reveal(".row12", { delay: 250 });
ScrollReveal().reveal(".row13", { delay: 400 });
ScrollReveal().reveal(".row21", { delay: 550 });
ScrollReveal().reveal(".row22", { delay: 700 });
ScrollReveal().reveal(".row23", { delay: 850 });
ScrollReveal().reveal(".row31", { delay: 900 });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"75% 50%",
    end:"100% 50%",
    scrub:5,
    duration: 1,
    pin:true,
  }});
  tl
  .to(".img",{
    width: "100vw",
    height: "100vh",
  })

// Slider

$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});





 //comeback message for tab bar
 let docTitle = document.title;
 window.addEventListener("blur",()=>{
   document.title="Come back :(";
 
 })
 window.addEventListener("focus",()=>{
   document.title=docTitle;
 })