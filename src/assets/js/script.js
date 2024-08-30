// toggle sidebar
function sidebarToggle() {
  let sidebar = document.getElementsByClassName("sidebar-wrapper");
  let header = document.getElementsByClassName("header");
  let mainPage = document.getElementsByClassName("main-page");
  // console.log("Sidebar Toggle")
  if (
    sidebar[0].classList.contains("open") &&
    header[0].classList.contains("active") &&
    mainPage[0].classList.contains("view")
  ) {
    // Removing Active class from header
    header[0].classList.remove("active");

    // Remove view class from main-page
    mainPage[0].classList.remove("view");

    // remove open class from sidebar wrapper
    sidebar[0].classList.remove("open");
  } else {
    // adding open class to sidebar wrapper
    sidebar[0].classList.add("open");

    //add view class to main-page
    mainPage[0].classList.add("view");

    // adding Active class to header
    header[0].classList.add("active");
    closeAll();
  }

  




}
function closeSidebar() {
  let s = document.getElementsByClassName("sidebar-wrapper");
  let h = document.getElementsByClassName("header");
  let m = document.getElementsByClassName("main-page");

  // Adding Active class to header
  h[0].classList.add("active");

  // Add view class to main-page
  m[0].classList.add("view");

  // Add open class to sidebar wrapper
  s[0].classList.add("open");
  closeAll();
}
function openSidebar() {
  let s = document.getElementsByClassName("sidebar-wrapper");
  let h = document.getElementsByClassName("header");
  let m = document.getElementsByClassName("main-page");

  // Adding Active class to header
  h[0].classList.remove("active");

  // Add view class to main-page
  m[0].classList.remove("view");

  // Add open class to sidebar wrapper
  s[0].classList.remove("open");
}

// Mobile nav Toggle
function mobileNav() {
  let headerleft = document.getElementsByClassName("left");
  if (headerleft[0].classList.contains("mobile-nav")) {
    // Removing Active class from header
    headerleft[0].classList.remove("mobile-nav");
  } else {
    // adding Active class to headerleft
    headerleft[0].classList.add("mobile-nav");
  }
}


function closeAll(){
  const hasCollapsible = document.querySelectorAll(".has-collapsible");
  const right = document.getElementsByClassName('right')

      right[0].classList.toggle('rotate')
      // Close Other Collapsible
      hasCollapsible.forEach(function (otherCollapsible) {
          otherCollapsible.classList.remove("active");
      })
}
// SUB MENU 
// document.addEventListener("DOMContentLoaded", () => {
//   const hasCollapsible = document.querySelectorAll(".has-collapsible");
//   const right = document.getElementsByClassName('right')
  
//   hasCollapsible.forEach(function (collapsible) {
//     collapsible.addEventListener("click", function () {
//       collapsible.classList.toggle("active");
//       right[0].classList.toggle('rotate')
//       console.log("Open")
//       hasCollapsible.forEach(function (otherCollapsible) {
//         if (otherCollapsible !== collapsible) {
//           otherCollapsible.classList.remove("active");
//         }
//       });
//     });
//   });
// });




// document.addEventListener("DOMContentLoaded", function () {
//   var subBtn = document.querySelector(".sub-btn");
//   var subMenu = subBtn.nextElementSibling;

//   subBtn.addEventListener("click", function () {
//     subMenu.classList.toggle("active");
//   });

//   var subItems = document.querySelectorAll(".sub-item");
//   subItems.forEach(function (subItem) {
//     subItem.addEventListener("click", function (event) {
//       event.stopPropagation();
//       removeActiveClass(subItems);
//       subItem.classList.add("active");
//     });
//   });

//   function removeActiveClass(elements) {
//     elements.forEach(function (element) {
//       element.classList.remove("active");
//     });
//   }

//   document.addEventListener("click", function (event) {
//     if (!subBtn.contains(event.target)) {
//       subMenu.classList.remove("active");
//     }
//   });
//   const subbtns = document.querySelectorAll('.sub-btn');
//   subbtns.forEach(subbtn => {
//     subbtn.addEventListener('click', openSidebar);
//   });
// });








