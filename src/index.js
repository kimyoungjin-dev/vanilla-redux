const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateNumber = () => {
  number.innerText = count;
};
const handlePlus = () => {
  count = count + 1;
};

const handleMinus = () => {
  count = count - 1;
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
