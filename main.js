let parent = document.querySelector("div.p");
let child = document.querySelectorAll("div.q");

child.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    child.forEach((elem) => {
      elem.style.backgroundColor = "lightgray";
    });

    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.backgroundColor = "violet";
    }
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.style.backgroundColor = "green";
    }
  });
});
