let star1 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    star1 += "*";
  }
  star1 += "\n";
}
document.getElementById("star1").innerText = star1;

let star2 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    star2 += "*";
  }
  star2 += "\n";
}

for (let i = 4; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    star2 += "*";
  }
  star2 += "\n";
}
document.getElementById("star2").innerText = star2;

let star3 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i - 1; j++) {
    star3 += "&nbsp;";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    star3 += "*";
  }
  star3 += "<br>";
}

for (let i = 3; i >= 0; i--) {
  for (let j = 0; j < 5 - i - 1; j++) {
    star3 += "&nbsp;";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    star3 += "*";
  }
  if (i > 0) {
    star3 += "<br>";
  }
}

document.getElementById("star3").innerHTML = star3;
