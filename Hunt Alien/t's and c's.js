const agreeBox = document.getElementById("agree");
const nextBtn = document.getElementById("nextBtn");

agreeBox.addEventListener("change", function() {
  if (this.checked) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function() {window.location.href = "professor.html";
});