const [burgerBtn] = document.getElementsByClassName("js-burger");
const [menu] = document.getElementsByClassName("menu-mob__list");

const toggleMenu = () => {
  menu.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-open");
  document.body.classList.toggle("menu-open");
};
const closeMenu = () => {
  menu.classList.remove("is-open");
  burgerBtn.classList.remove("is-open");
  document.body.classList.toggle("menu-open");
};
const openMenu = () => {
  menu.classList.add("is-open");
  burgerBtn.classList.add("is-open");
};
const clickMenu = (e) => {
  if ((menu.style.display = "none")) {
    menu.style.display = "";
    e.currentTarget.addEventListener("click", toggleMenu);
  }
};

const links = Array.from(document.getElementsByClassName("menu-mob__link"));

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "none";
    menu.classList.remove("is-open");
    burgerBtn.classList.remove("is-open");
    burgerBtn.addEventListener("click", clickMenu);
  });
});

burgerBtn.addEventListener("click", toggleMenu);
