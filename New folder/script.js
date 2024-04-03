const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Unobserve the target element
      observer.unobserve(entry.target);
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let hamMenu = document.getElementById("ham");
let aside = document.getElementById("aside");
hamMenu.addEventListener("click", (e) => {
  aside.classList.toggle("translate");
});

let faqclick = document.getElementsByClassName("faq-wrapper-container");
let elements = document.getElementsByClassName("paragraph-hidden");
let faqPlusImages = document.getElementsByClassName("faq-plus");

// Loop through the faqclick elements and add the event listener to each element
for (let i = 0; i < faqclick.length; i++) {
  faqclick[i].addEventListener("click", function () {
    // Get the index of the clicked element within the faqclick collection
    let index = Array.from(faqclick).indexOf(this);

    // Check if the clicked element already has the "item-appear" class
    let isItemAppear = elements[index].classList.contains("item-appear");

    // Remove the "item-appear" class from all elements in the elements collection
    for (let j = 0; j < elements.length; j++) {
      elements[j].classList.remove("item-appear");
      faqPlusImages[j].src =
        "https://icongr.am/entypo/plus.svg?size=38&color=currentColor"; // Reset all images to the original image
    }

    // Toggle the class "item-appear" only on the clicked element if it didn't have it already
    if (!isItemAppear) {
      elements[index].classList.add("item-appear");
      faqPlusImages[index].src =
        "https://icongr.am/entypo/minus.svg?size=38&color=currentColor"; // Replace with the minus image URL
    }
  });
}
