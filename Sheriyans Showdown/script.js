var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 +"px";
    blur.style.top = dets.y - 200  + "px";
})

var clutter = 0
const interval = setInterval(function () {
    if (clutter <= 100) {
        clutter++
    }

    if (clutter == 100) {
        clearInterval(interval)
    }

    document.querySelector(".loader h3").innerHTML = `<h3 class="font-bold text-3xl">${clutter}</h3>`;
}, 50)

var tl = gsap.timeline()

tl.from(".loader .bar", {
    width: 0,
    duration: 6
})


tl.to(".loader", {
    height: 0,
    duration: 0.3,
    opacity : 0
})

tl.to(".page0", {
    height: 0,
    duration: 0.3
})

// const data = [
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2021/03/image-60.webp",
//         sno: "01",
//         h1: "Mudbrick Vineyard",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-62.webp",
//         sno: "02",
//         h1: "Autex Acountics",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-61.webp",
//         sno: "03",
//         h1: "KPMG",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/08/image-63.webp",
//         sno: "04",
//         h1: "Carfe",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-59.webp",
//         sno: "05",
//         h1: "Naumi Hotels",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2021/03/image-58.webp",
//         sno: "06",
//         h1: "Stoneridge Esate",
//     }
// ]

// function print() {
//     var container = ""
//     data.forEach(function (value) {
//         container += `<div class="strip w-full h-[200px] relative group">
//         <div class="written z-[1000] h-[100%] flex items-end justify-between ">
//         <h4>${value.sno}</h4>
//         <h1 class="text-8xl">${value.h1}</h1>
//         <button class="uppercase flex items-center gap-2 text-xs font-medium scale-0 group-hover:scale-[1]"><i class="ri-checkbox-blank-circle-fill text-[10px]"></i>Visit site</button>
//         </div>
//         <div class = "image  w-[300px] h-[400px] absolute opacity-0 group-hover:opacity-1"><img class="h-[100%] w-[100%] object-cover -rotate-[10deg]" src="${value.img}" alt=""></div>
//             <div class="line w-full h-[1px] bg-gray-500 mt-3"></div>
//     </div>`
//     })

//     page5.innerHTML += container
// }

// print()
var page5 = document.querySelector(".page5 .body")
var strip = document.querySelector(".page5 .strip")
var strips = document.querySelectorAll(".page5 .strip")


strips.forEach(strip => {
    strip.addEventListener("mouseenter", () => {
        strip.style.color = " #39a6d8"
        strip.style.fontFamily = "cursive"
        strip.style.cursor = "pointer"
    })
    strip.addEventListener("mouseleave", () => {
        strip.style.color = "white"
        strip.style.fontFamily = "gilroy"
    })
});

function page1Animation(){
    tl.from(".page1 nav .left, .page1 nav .right",{
        y : -20,
        opacity : 0,
        duration : 1,
        stagger : 0.3
    })
    
    tl.from(".page1 .nav2",{
        opacity : 0,
        center : 0,
        scale : 0
    })
    
    tl.from(".page1 .nav3",{
        y : 10,
        opacity : 0,
        duration : 1,
    })
    
    tl.from(".page1 .btns .b1",{
        x: -20,
        opacity : 0,
    },"x")
    
    tl.from(".page1 .btns .b2",{
        x: 20,
        opacity: 0
    },"x")

    tl.to("btn",{
        zIndex : 999
    })
    
    tl.from(".page1 .down",{
        y : -10,
        opacity : 0
    })
}

page1Animation()

var elm1 = document.querySelector('.elem1');
var img1= document.querySelector('.elem1 .img1');

var elm2= document.querySelector('.elem2');
var img2 = document.querySelector('.elem2 .img2');

var elm3= document.querySelector('.elem3');
var img3 = document.querySelector('.elem3 .img3');

var elm4= document.querySelector('.elem4');
var img4 = document.querySelector('.elem4 .img4');

var elm5= document.querySelector('.elem5');
var img5 = document.querySelector('.elem5 .img5');

var elm6= document.querySelector('.elem6');
var img6 = document.querySelector('.elem6 .img6');

elm1.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img1.style.left = dets.x - 250 + 'px';
    img1.style.top = dets.y - 200 + 'px';
    gsap.to('.elem1 .img1', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm1.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img1.style.left = dets.x - 250  + 'px';
    img1.style.top = dets.y - 200 + 'px';
    gsap.to('.elem1 .img1', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});

elm2.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img2.style.left = dets.x - 250 + 'px';
    img2.style.top = dets.y - 200 + 'px';
    gsap.to('.elem2 .img2', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm2.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img2.style.left = dets.x - 250 + 'px';
    img2.style.top = dets.y - 200 + 'px';
    gsap.to('.elem2 .img2', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});


elm3.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img3.style.left = dets.x - 250 + 'px';
    img3.style.top = dets.y - 200 + 'px';
    gsap.to('.elem3 .img3', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm3.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img3.style.left = dets.x - 250 + 'px';
    img3.style.top = dets.y - 200 + 'px';
    gsap.to('.elem3 .img3', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});


elm4.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img4.style.left = dets.x - 250 + 'px';
    img4.style.top = dets.y - 200 + 'px';
    gsap.to('.elem4 .img4', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm4.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img4.style.left = dets.x - 250 + 'px';
    img4.style.top = dets.y - 200 + 'px';
    gsap.to('.elem4 .img4', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});


elm5.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img5.style.left = dets.x - 250 + 'px';
    img5.style.top = dets.y - 200 + 'px';
    gsap.to('.elem5 .img5', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm5.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img5.style.left = dets.x - 250 + 'px';
    img5.style.top = dets.y - 200 + 'px';
    gsap.to('.elem5 .img5', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});

elm6.addEventListener('mousemove', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img6.style.left = dets.x - 250 + 'px';
    img6.style.top = dets.y - 200 + 'px';
    gsap.to('.elem6 .img6', {
        opacity: 1,
        duration: 0.5 // Adding a duration for the animation
    });
})

elm6.addEventListener('mouseleave', function(dets){
    // Use dets.clientX and dets.clientY for accurate coordinates
    img6.style.left = dets.x - 250 + 'px';
    img6.style.top = dets.y - 200 + 'px';
    gsap.to('.elem6 .img6', {
        opacity: 0,
        duration: 0.5 // Adding a duration for the animation
    });
});
