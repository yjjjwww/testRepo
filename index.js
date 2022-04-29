const p = document.querySelector("p");
const button = document.querySelector("button");

function changeWord() {
  if (p.textContent === "안녕하세요!") {
    p.textContent = "잘가요!";
  } else {
    p.textContent = "안녕하세요!";
  }
}

button.addEventListener("click", changeWord);
