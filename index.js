document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let hambtn = document.getElementById("menu-toggle");
let menuBox = document.getElementById("nav-list-items");
let hamele = document.getElementById("ham-list-items");
window.addEventListener("resize", () => {
  let width = window.outerWidth;
  if (width < 700) {
    hambtn.style.display = "flex";
    document.getElementById("hire-btn").style.display = "none";
    menuBox.style.display = "none";
} else {
    hambtn.style.display = "none";
    document.getElementById("ham-box").style.display = "none"
    document.getElementById("hire-btn").style.display = "flex";
    menuBox.style.display = "flex";
  }
});

hambtn.addEventListener("click", () => {
if(document.getElementById("ham-box").style.display == "none" && window.outerWidth <700){

    document.getElementById("ham-box").style.display = "block";
    document.getElementById("ham-box").style.width = "180px";
    document.getElementById("ham-box").style.height = "300px";
    document.getElementById("ham-box").style.backgroundColor = "black";
    document.getElementById("ham-box").style.position = "relative";
    document.getElementById("ham-box").style.top = "200px";

    hamele.style.display = "flex";
    hamele.style.gap = "30px";
    hamele.style.flexDirection = "column";
    hamele.style.justifyContent = "center";
    hamele.style.alignItems = "center";
    hamele.style.display = "none";
    let items=hamele.innerHTML;
    items.style.color = "white";
    console.log("happening");
}
else{
    document.getElementById("ham-box").style.display = "none"
}
});
