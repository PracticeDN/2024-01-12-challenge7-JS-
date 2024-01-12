let score = parseInt(prompt("기말고사 점수를 입력하세요."));

const scoreEl = document.getElementById("score");
const gradesEl = document.getElementById("grades");

if (score < 0 || score > 100) {
  alert("점수는 0~100점 사이입니다.");
  location.reload();
}

if (score >= 90) {
  scoreEl.append(score);
  gradesEl.append("A");
} else if (score >= 80 && score < 90) {
  scoreEl.append(score);
  gradesEl.append("B");
} else if (score >= 70 && score < 80) {
  scoreEl.append(score);
  gradesEl.append("C");
} else if (score >= 60 && score < 70) {
  scoreEl.append(score);
  gradesEl.append("D");
} else {
  scoreEl.append(score);
  gradesEl.append("F2");
}
