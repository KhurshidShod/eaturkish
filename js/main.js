var slider = document.getElementById("slider");
var item = document.querySelectorAll(".menu__wrapper-buttons-wrapper-button");
var heroImg = document.getElementById("heroImg");
var tabs = document.querySelectorAll(".menu__wrapper-buttons-wrapper-button");
var tabs_content = document.querySelectorAll(".menu__wrapper-content-page");

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

function getActiveTab(i) {
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });

  const selectedTab = tabs[i];
  const selectedTabContent = tabs_content[i];

  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
}
$('.js-tilt').tilt({
    glare: true,
    maxGlare: 15
})