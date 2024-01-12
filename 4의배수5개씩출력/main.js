let i = 1;
let numberArray = [];

while (i <= 100) {
  let number = 100;
  let multiplication = 4 * i;
  number = number + multiplication;
  numberArray.push(number);

  if (numberArray.length % 5 === 0) {
    const box = document.createElement("div");

    numberArray.slice(-5).forEach((num) => {
      box.append(`${num}, `);
    });

    document.body.appendChild(box);
  }

  i++;
}
