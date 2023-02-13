/* eslint-disable no-unused-vars */
import "./normalize.css";
import "./style.css";
import { renderCard, renderProject } from "./interface";
import {
  listStorage,
  projectStorage,
  firstTimeStorage,
  emptyProject,
} from "./data-store";
import createTodoCard from "./todo-card";
import createProject from "./projectCreate";

function emptyTask() {
  if (firstTimeStorage() === false) {
    renderCard();
  }
  if (emptyProject() === false) {
    renderProject();
  }
}
const gatherFormData = (() => {
  const titleInput = document.querySelector("#name");
  const descInput = document.querySelector("#desc");
  const dateInput = document.querySelector("#date");
  const prioInput = document.querySelector("#priority");
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    const card = createTodoCard(
      titleInput.value,
      descInput.value,
      dateInput.value,
      prioInput.value
    );
    if (firstTimeStorage() === false) {
      const cardArray = listStorage.getCard();
      listStorage.setList(cardArray);
    }
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
const getProjectName = (() => {
  const projectTitle = document.querySelector("#project-name");
  const form = document.querySelector("#project-form");

  form.addEventListener("submit", (e) => {
    const project = createProject(projectTitle.value);
    if (emptyProject() === false) {
      const projectArray = projectStorage.getProject();
      projectStorage.setArray(projectArray);
    }
    projectStorage.addProject(project);
    renderProject();
    e.preventDefault();
    if (form.classList.contains("visible")) {
      form.classList.add("project-no-visible");
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
      form.classList.remove("project-no-visible");
    }
  });
})();

emptyTask();

