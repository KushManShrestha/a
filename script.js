// cursor tracker
cursortracker();
function cursortracker() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

//cursor expand
expandCursor();
function expandCursor() {
    window.addEventListener("mousemove", e => {
        var targetElement = e.target;
        if (targetElement.tagName.toLowerCase() === 'a' || targetElement.tagName.toLowerCase() === 'span') {
            document.querySelector(".cursor").style.width = `64px`;
            document.querySelector(".cursor").style.height = `64px`;
            document.querySelector(".cursor").style.left = `-30px`;
            document.querySelector(".cursor").style.top = `-27px`;
            document.querySelector(".cursor").style.mixBlendMode = `difference`;
        }
        else {
            document.querySelector(".cursor").innerHTML = "";
            document.querySelector(".cursor").style.width = `12px`;
            document.querySelector(".cursor").style.height = `12px`;
            document.querySelector(".cursor").style.left = `-5px`;
            document.querySelector(".cursor").style.top = `-5px`;
        }
    });
}

// time display
setInterval(() => {
    const d = new Date();
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.querySelectorAll(".time").forEach(e => e.textContent = timeStr + " IST");
}, 1000);

// gsap
let tl = gsap.timeline();
let tl2 = gsap.timeline();

tl.from(".from-btm-ele", {
    y: "100%",
    duration: .5,
    stagger: .5,
    opacity: 0,
    delay: 3.3
});
tl2.from(".from-top-ele", {
    y: "-100%",
    duration: .5,
    stagger: .5,
    opacity: 0,
    delay: 3.3
});
gsap.from(".from-top-1-ele", {
    y: "-100%",
    duration: .5,
    opacity: 0,
    delay: 3.3
});

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// loader
let a = 0;
const timer = setInterval(() => {
    a += Math.floor(Math.random() * 20);
    document.querySelector(".timer").textContent = (a >= 100 ? 100 : a) + "%";
    if (a >= 100) clearInterval(timer);
}, 200);
gsap.to(".intro", { y: "-100%", delay: 2.3, duration: .2 });
