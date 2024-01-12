const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");

let feedbackBox = document.createElement("div");
feedbackBox.style.marginTop = "20px";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomInt(1, 101);

console.log(randomNumber);
function updateFeedback(message) {
  feedbackBox.innerText = message;
}

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  let value = parseInt(inputEl.value);

  if (isNaN(value) || value < 1 || value > 100) {
    alert("1부터 100사이의 숫자를 입력해주세요.");
    return;
  }

  if (value < randomNumber) {
    updateFeedback("숫자가 작아요. 숫자를 올려보세요");
  } else if (value > randomNumber) {
    updateFeedback("숫자가 커요. 숫자를 낮춰보세요.");
  } else {
    updateFeedback("정답입니다.");
    let refreshButton = document.createElement("button");
    refreshButton.style.marginTop = "20px";
    document.body.appendChild(refreshButton);
    refreshButton.innerText = "다시하기";
    refreshButton.addEventListener("click", () => {
      location.reload();
    });
  }
});

document.body.appendChild(feedbackBox);
