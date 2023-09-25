const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function FirstPageAni() {

    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".boundingelement", {
            y: '0',
            duration: 1.5,
            ease: Expo.easeInOut,
            stagger: 0.2
        })

        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}

var timeout;


function sclaecircle() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener("mousemove", function (dets) {

        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.9, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.9, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector('#mincircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale (1 ,1 )`;

        }, 100);
    });
}



function circleMouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', function (dets) {

        document.querySelector('#mincircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`;

    });
}

sclaecircle();
circleMouseFollower();

FirstPageAni();

document.querySelectorAll(".element").forEach(function(element){
    var rotate = 0;
    var diffrot = 0;
element.addEventListener("mousemove", function(dets){
    var diff = dets.clientY - element.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20 , 20 , diffrot),
    });
    gsap.to(element.querySelector("h1"),{
        opacity:0.2,
        paddingLeft:"30px",
    });
});

element.addEventListener("mouseleave", function(dets){
    gsap.to(element.querySelector("img"),{
        opacity:0,
        ease:Power3,
       
    });

    gsap.to(element.querySelector("h1"),{
        opacity:0.6,
        paddingLeft:"0px",
    });
});

});