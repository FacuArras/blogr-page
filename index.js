const headerMenu = document.querySelector(".header__menu-button");
const headerHamburger = document.querySelector(".header__hamburger");

headerMenu.addEventListener("click", () => {
  headerHamburger.classList.toggle("header__hamburger--visible");
});

const subMenuBtn = document.querySelectorAll(".submenu__btn");
for (let i = 0; i < subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener("click", function () {
    if (window.innerWidth < 760) {
      const subMenu = this.nextElementSibling;
      const height = subMenu.scrollHeight;
      if (subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
      } else {
        subMenu.classList.add("desplegar");
        subMenu.style.height = height + "px";
        subMenu.style.padding = "1em";
      }
    }
  });
}
