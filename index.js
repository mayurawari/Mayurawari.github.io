document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let ele1 = document.getElementById("about-png");
let ele2 = document.getElementById("about-text");

window.addEventListener("scroll", () => {
  let height = document.documentElement.scrollTop;
  if (height > 400) {
    ele1.style.animation = "slideleft 1s ease-in-out forwards";
    ele2.style.animation = "slideright 1s ease-in-out forwards";
  }
});

document.getElementById("resume-link").addEventListener("click", function () {
  setTimeout(function () {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1cHyF0x5wJDb-4xfK2Vcj7eV4SCH0OL6a";
  }, 2000);
});
