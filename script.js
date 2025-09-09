const point1 = document.getElementById("pointer1");
const point2 = document.getElementById("pointer2");
const point3 = document.getElementById("pointer3");
const point4 = document.getElementById("pointer4");
const point5 = document.getElementById("pointer5");
const point6 = document.getElementById("pointer6");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const video1 = document.getElementById("video1"); 



const video2 = document.getElementById("video2"); 
const video3 = document.getElementById("video3"); 
const video4 = document.getElementById("video4"); 
const video5 = document.getElementById("video5"); 
const video6 = document.getElementById("video6"); 
const play1 = document.getElementById("play1"); 
const play2 = document.getElementById("play2"); 
const play3 = document.getElementById("play3"); 
const play4 = document.getElementById("play4"); 
const play5 = document.getElementById("play5"); 



const counters =  document.querySelectorAll(".counters span");
const container =  document.querySelector(".counters");



const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");
const click4 = document.getElementById("click4");
const click5 = document.getElementById("click5");
const click6 = document.getElementById("click6");
const display1 = document.getElementById("display1"); 
const display2 = document.getElementById("display2"); 
const display3 = document.getElementById("display3"); 
const display4 = document.getElementById("display4"); 
const display5 = document.getElementById("display5");
const display6 = document.getElementById("display6");



const benz1 = document.getElementById("benz1");
const benz2 = document.getElementById("benz2");
const benz3 = document.getElementById("benz3");
const benz4 = document.getElementById("benz4");
const benz5 = document.getElementById("benz5");
const benz6 = document.getElementById("benz6");
const benz7 = document.getElementById("benz7");
const dark1 = document.getElementById("dark1"); 
const dark2 = document.getElementById("dark2"); 
const dark3 = document.getElementById("dark3"); 
const dark4 = document.getElementById("dark4"); 
const dark5 = document.getElementById("dark5");
const dark6 = document.getElementById("dark6");
const dark7 = document.getElementById("dark7");



const show = document.getElementById("show-menu");
const hide = document.getElementById("hide-menu");


var navlinks = document.getElementById("navlinks");
function showmenu(){
    navlinks.style.display = "block";
    show.style.display = "none"
    hide.style.display = "block"
}
function hidemenu(){
    navlinks.style.display = "none";
        hide.style.display = "none"

    show.style.display = "block"
}



// FIRST CLICK FUNCTION 
point1.addEventListener("click", function () {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    video1.style.display = "none";


    point1.classList.add("act");
    point2.classList.remove("act");
    point3.classList.remove("act");
    point4.classList.remove("act");
    point5.classList.remove("act");
    point6.classList.remove("act");

    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});
point2.addEventListener("click", function () {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    video1.style.display = "none";

    point1.classList.remove("act");
    point2.classList.add("act");
    point3.classList.remove("act");
    point4.classList.remove("act");
    point5.classList.remove("act");
    point6.classList.remove("act");
    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});
point3.addEventListener("click", function () {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    video1.style.display = "none";


    point1.classList.remove("act");
    point2.classList.remove("act");
    point3.classList.add("act");
    point4.classList.remove("act");
    point5.classList.remove("act");
    point6.classList.remove("act");
    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});
point4.addEventListener("click", function () {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    image5.style.display = "none";
    image6.style.display = "none";
    video1.style.display = "none";


    point1.classList.remove("act");
    point2.classList.remove("act");
    point3.classList.remove("act");
    point4.classList.add("act");
    point5.classList.remove("act");
    point6.classList.remove("act");
    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});
point5.addEventListener("click", function () {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "none";
    video1.style.display = "none";


    point1.classList.remove("act");
    point2.classList.remove("act");
    point3.classList.remove("act");
    point4.classList.remove("act");
    point5.classList.add("act");
    point6.classList.remove("act");
    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});
point6.addEventListener("click", function () {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "block";
    video1.style.display = "none";


    point1.classList.remove("act");
    point2.classList.remove("act");
    point3.classList.remove("act");
    point4.classList.remove("act");
    point5.classList.remove("act");
    point6.classList.add("act");
    // fit1.classList.add("act");
    // fit2.classList.remove("act");
    // fit3.classList.remove("act");
});




// SROLL  FUNCTION 

window.addEventListener('scroll', function () {
    var top = window.scrollY;
    if (top > 608 && top < 1720) {
        video2.style.opacity = 1;
        video3.style.opacity = 0;
        video4.style.opacity = 0;
        video5.style.opacity = 0;
        video6.style.opacity = 0;
        play1.play();
        // first.style.position = 'sticky';
    } else if (top > 1741 && top < 2380) {
        video2.style.opacity = 0;
        video3.style.opacity = 1;
        video4.style.opacity = 0;
        video5.style.opacity = 0;
        video6.style.opacity = 0;
        play2.play();
    } else if (top > 2391 && top < 2890) {
        video2.style.opacity = 0;
        video3.style.opacity = 0;
        video4.style.opacity = 1;
        video5.style.opacity = 0;
        video6.style.opacity = 0;
        play3.play();
    } else if (top > 2891 && top < 3370) {
        video2.style.opacity = 0;
        video3.style.opacity = 0;
        video4.style.opacity = 0;
        video5.style.opacity = 1;
        video6.style.opacity = 0;
        play4.play();
    } else if (top > 3371 && top < 5300) {
        video2.style.opacity = 0;
        video3.style.opacity = 0;
        video4.style.opacity = 0;
        video5.style.opacity = 0;
        video6.style.opacity = 1;
        play5.play();
    } else {
        video2.style.opacity = 0;
        video3.style.opacity = 0;
        video4.style.opacity = 0;
        video5.style.opacity = 0;
        video6.style.opacity = 0;
    }
})



// function showVideo(activeVideo) {
//     [video2, video3, video4, video5, video6].forEach(video => {
//         if (video === activeVideo) {
//             video.style.opacity = 1;
//             video.play();
//         } else {
//             video.style.opacity = 0;
//             video.pause();
//             video.currentTime = 0; // reset so it always starts fresh
//         }
//     });
// }

// window.addEventListener('scroll', function () {
//     var top = window.scrollY;

//     if (top > 808 && top < 1750) {
//         showVideo(video2);
//     } else if (top > 1751 && top < 2620) {
//         showVideo(video3);
//     } else if (top > 2621 && top < 3190) {
//         showVideo(video4);
//     } else if (top > 3211 && top < 4000) {
//         showVideo(video5);
//     } else if (top > 4001 && top < 5300) {
//         showVideo(video6);
//     } else {
//         [video2, video3, video4, video5, video6].forEach(v => {
//             v.style.opacity = 0;
//             v.pause();
//         });
//     }
// });




// NUMBER COUNT FUNCTION 

let activated = false;

window.addEventListener("scroll", () => {
  if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        // adjust speed: bigger numbers = bigger steps
        const increment = Math.ceil(target / 200); // finish in about 200 steps

        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = count;
          setTimeout(updateCount, 10); // total ≈ 2s
        } else {
          counter.innerText = target;
        }
      }
      updateCount();

      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
    (pageYOffset === 0 && activated === true)
  ) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});




// SECOND CLICK FUNCTION 
click1.addEventListener("click", function () {
    display1.style.display = "block";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "none";
  
});
click2.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "block";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "none";
    
});
click3.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "block";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "none";
    
});
click4.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "block";
    display5.style.display = "none";
    display6.style.display = "none";
    
});
click5.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "block";
    display6.style.display = "none";
  
});
click6.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "block";
});




// THIRD CLICK FUNCTION 
benz1.addEventListener("click", function () {
    dark1.style.display = "block";
    dark2.style.display = "none";
    dark3.style.display = "none";
    dark4.style.display = "none";
    dark5.style.display = "none";
    dark6.style.display = "none";
    dark7.style.display = "none";
  
});
benz2.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "block";
    dark3.style.display = "none";
    dark4.style.display = "none";
    dark5.style.display = "none";
    dark6.style.display = "none";
    dark7.style.display = "none";
    
});
benz3.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "none";
    dark3.style.display = "block";
    dark4.style.display = "none";
    dark5.style.display = "none";
    dark6.style.display = "none";
    dark7.style.display = "none";
    
});
benz4.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "none";
    dark3.style.display = "none";
    dark4.style.display = "block";
    dark5.style.display = "none";
    dark6.style.display = "none";
    dark7.style.display = "none";
 
});
benz5.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "none";
    dark3.style.display = "none";
    dark4.style.display = "none";
    dark5.style.display = "block";
    dark6.style.display = "none";
    dark7.style.display = "none";
  
});
benz6.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "none";
    dark3.style.display = "none";
    dark4.style.display = "none";
    dark5.style.display = "none";
    dark6.style.display = "block";
    dark7.style.display = "none";
});
benz7.addEventListener("click", function () {
    dark1.style.display = "none";
    dark2.style.display = "none";
    dark3.style.display = "none";
    dark4.style.display = "none";
    dark5.style.display = "none";
    dark6.style.display = "none";
    dark7.style.display = "block";
});

