let elements = document.querySelectorAll("[data-attribute]");
let descriptions = document.querySelectorAll(".hidden");

elements.forEach((element, i) => {
  element.addEventListener("click", () => {
    descriptions[i].classList.toggle("hidden");
    element.querySelector("img").src = descriptions[i].classList.contains(
      "hidden"
    )
      ? "assets/images/icon-plus.svg"
      : "assets/images/icon-minus.svg";
  });
});
