var iconNav = document.querySelector(".section-header__icon-nav");

iconNav.addEventListener("click", function(event) {
  event.preventDefault();
  iconNav.classList.toggle("section-header__icon-nav--close");
});

$(function($) {
 $.localScroll({
  duration: 1000,
  hash: false });
 });
