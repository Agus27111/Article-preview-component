const buttonShare = document.querySelectorAll(".toggleButton");

buttonShare.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    const boxImg = document.querySelector(".boximg");
    const socialMedia = document.getElementById("socialMedia");

    boxImg.classList.toggle("hidden");
    socialMedia.classList.toggle("hidden");
  });
});
