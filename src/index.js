const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

form.addEventListener("submit", handleSubmit);
