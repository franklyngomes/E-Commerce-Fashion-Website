const menubtn = document.getElementById('menubtn')
const nav = document.getElementById('nav_menu')
const close = document.getElementById('closebtn')
const shop = document.getElementById('shop_dropdown')
const dropdown = document.getElementById('shop_ul')
menubtn.addEventListener('click', ()=>{
    nav.classList.add('show-menu')
})
close.addEventListener('click',()=>{
    nav.classList.remove('show-menu')
})
shop.addEventListener('click',()=>{
    dropdown.classList.add('show-dropdown')
})
shop.addEventListener('blur',()=>{
    dropdown.classList.remove('show-dropdown')
})

// =========CAROUSEL==========
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("trending_carousel_item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 2 seconds
}
// ===========SWIPER JS===========
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// =============CHANGE BACKGROUND HEADER============
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

