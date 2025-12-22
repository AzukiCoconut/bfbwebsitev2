document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".header-info").classList.toggle("expanded");
  document.querySelector(".hamburger").classList.toggle("is-active");
});
