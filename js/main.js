var heroImg = document.getElementById("heroImg");
var slider = document.getElementById("slider");
var item = document.querySelectorAll(".menu__wrapper-buttons-wrapper-button");
var toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

document.addEventListener("mousemove", (e) => {
    const speed = heroImg.getAttribute("data-speed");
    const x = (window.innerWidth + e.pageX * speed) / 300;
    const y = (window.innerHeight + e.pageY * speed) / 300;
    heroImg.style.transform = `translateX(${x}px) translateY(${y}px)`
})

window.addEventListener("scroll", () => {
    if(window.pageYOffset >= 80) {
        document.querySelector("nav").style.height = '80px';
        document.querySelector("nav").style.boxShadow = "rgba(0, 0, 0, 0.10) 0px 54px 55px, rgba(0, 0, 0, 0.05) 0px -12px 30px, rgba(0, 0, 0, 0.05) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    } else {
        document.querySelector("nav").style.height = '120px';
        document.querySelector("nav").style.boxShadow = "none"
    }
});
function indicator(e) {
    slider.style.left = e.offsetLeft + "px";
    slider.style.width = e.offsetWidth + "px";
    console.log(e.offsetLeft)
    console.log(e.offsetWidth)
    console.log()
}

item.forEach(itm => {
    itm.addEventListener("click", (e) => {
        item.forEach(item1 => {
            item1.classList.remove("active");
        })
        itm.classList.add('active');
        indicator(e.target);
    })
});

window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        document.querySelector('.backtop').style.display = 'flex';
    } else {
        document.querySelector('.backtop').style.display = 'none';
    }
});

document.querySelector('.backtop').addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})