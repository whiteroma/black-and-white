new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(()=>{const e=document.querySelector("[data-menu-button"),t=document.querySelector("[data-menu]"),n=document.querySelectorAll(".navigation__item");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")})),n.forEach((e=>e.addEventListener("click",(()=>t.classList.toggle("is-open")))))})();
//# sourceMappingURL=index.11d8be8b.js.map
