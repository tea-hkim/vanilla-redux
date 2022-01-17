const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateNumber = () => {
  number.innerText = count;
};

const handleClick = (event) => {
  const {
    target: { id },
  } = event;
  if (id === "add") {
    count = count + 1;
  } else {
    count = count - 1;
  }
  updateNumber();
};

add.addEventListener("click", handleClick);
minus.addEventListener("click", handleClick);
