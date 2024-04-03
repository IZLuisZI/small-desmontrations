const mainpage = document.getElementById("page");
const buttonclose = document.getElementById("close");
const popupContainer = document.getElementById("game-about-container");
const addpopup = document.getElementsByClassName("more-about-game-container");
const h4Elements = document.getElementsByTagName("h4");
const gameTitle = document.getElementById("game-title");
let gameImage = document.getElementById("game-image");
let goToGame = document.getElementById("redirect-link-to-game");
let gameLink = document.getElementsByClassName("game-link");

for (let i = 0; i < addpopup.length; i++) {
  addpopup[i].addEventListener("click", (e) => {
    popupContainer.style.display = "block";
    gameTitle.textContent = h4Elements[i].textContent;
    goToGame.href = gameLink[i].href;
  });
}

buttonclose.addEventListener("click", (e) => {
  popupContainer.style.display = "none";
});

let searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  Array.from(h4Elements).forEach((h4) => {
    let parentParentElement = h4.parentNode;
    if (h4.textContent.toLowerCase().includes(value)) {
      parentParentElement.style.display = "block";
    } else {
      parentParentElement.style.display = "none";
    }
  });
});
