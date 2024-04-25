document
  .querySelector(".dropdown-arrow1")
  .addEventListener("click", function () {
    var hiddenParagraph1 = document.querySelector(".hidden-paragraph1");

    if (hiddenParagraph1.style.display === "none") {
      hiddenParagraph1.style.display = "block";
      this.textContent = "▲";
    } else {
      hiddenParagraph1.style.display = "none";
      this.textContent = "▼";
      ("▶▼");
    }
  });

document
  .querySelector(".dropdown-arrow2")
  .addEventListener("click", function () {
    var hiddenParagraph2 = document.querySelector(".hidden-paragraph2");

    if (hiddenParagraph2.style.display === "none") {
      hiddenParagraph2.style.display = "block";
      this.textContent = "▲";
    } else {
      hiddenParagraph2.style.display = "none";
      this.textContent = "▼";
    }
  }); 

document
  .querySelector(".dropdown-arrow3")
  .addEventListener("click", function () {
    var hiddenParagraph3 = document.querySelector(".hidden-paragraph3");

    if (hiddenParagraph3.style.display === "none") {
      hiddenParagraph3.style.display = "block";
      this.textContent = "▲";
    } else {
      hiddenParagraph3.style.display = "none";
      this.textContent = "▼";
    }
  });
  


