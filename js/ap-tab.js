var tabs = document.querySelectorAll(".menu__wrapper-buttons-wrapper-button");
var tabs_content = document.querySelectorAll(".menu__wrapper-content-page");

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
  };