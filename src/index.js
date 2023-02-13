import "./normalize.css";
import "./style.css";
import "./interface";
import listStorage from "./data-store";
import createTodoCard from "./todo-card";

const gatherFormData = (() => {
  const titleInput = document.querySelector("#name");
  const descInput = document.querySelector("#desc");
  const dateInput = document.querySelector("#date");
  const prioInput = document.querySelector("#priority");
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    let formArray = [];
    formArray.push(titleInput.value);
    formArray.push(descInput.value);
    formArray.push(dateInput.value);
    formArray.push(prioInput.value);
    listStorage.initializeCard(formArray);

    formArray = [];
    e.preventDefault();
    if (form.classList.contains("visible")) {
      form.classList.add("no-visible");
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
      form.classList.remove("no-visible");
    }
  });
})();
const card1 = createTodoCard("bob", "bob", "bob", "bob");
const card2 = createTodoCard("bruh", "bruh", "bruh", "bruh");
listStorage.addCard(card1);
listStorage.addCard(card2);
console.log(listStorage.getCard());
