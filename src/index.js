import "./normalize.css";
import "./style.css";
import renderCard from "./interface";
import listStorage from "./data-store";
import createTodoCard from "./todo-card";

const gatherFormData = (() => {
  const titleInput = document.querySelector("#name");
  const descInput = document.querySelector("#desc");
  const dateInput = document.querySelector("#date");
  const prioInput = document.querySelector("#priority");
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    const card = createTodoCard(titleInput.value, descInput.value, dateInput.value, prioInput.value);
    listStorage.addCard(card);
    renderCard();
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

