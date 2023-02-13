/* eslint-disable no-unused-vars */
import { listStorage, projectStorage } from "./data-store";

const formVisibleToggle = (() => {
  const createButton = document.querySelector(".add-button");
  const form = document.querySelector(".form");
  createButton.addEventListener("click", () => {
    if (form.classList.contains("visible")) {
      form.classList.add("no-visible");
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
      form.classList.remove("no-visible");
    }
  });
})();

const projectFormToggle = (() => {
  const addProjectButton = document.querySelector("#add-project");
  const form = document.querySelector("#project-form");
  addProjectButton.addEventListener("click", () => {
    if (form.classList.contains("visible")) {
      form.classList.add("project-no-visible");
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
      form.classList.remove("project-no-visible");
    }
  });
})();
function removeAllChildren(container) {}
const renderProject = () => {
  const projectContainer = document.querySelector(".project-container");

  function removeAllProjects() {
    while (projectContainer.firstChild) {
      projectContainer.removeChild(projectContainer.lastChild);
    }
  }
  removeAllProjects();
  const projectArray = projectStorage.getProject();
  // eslint-disable-next-line array-callback-return
  projectArray.map((project, index) => {
    const createClearButton = document.createElement("button");
    createClearButton.classList.add("clear-button");
    createClearButton.textContent = "X";
    createClearButton.setAttribute("data-index", `${index}`);

    const createProject = document.createElement("div");
    createProject.classList.add("project-card");
    createProject.setAttribute("id", `project-${index}`);
    createProject.textContent = project.title;
    createClearButton.addEventListener("click", (e) => {
      
      const buttonValue = e.target.id.replace(/\D/g, "");
      projectStorage.removeProject(Number(buttonValue));
    });
    createProject.appendChild(createClearButton);
    projectContainer.appendChild(createProject);
  });
};

const renderCard = () => {
  const listContainer = document.querySelector("#list-container");
  function removeAllCard() {
    while (listContainer.firstChild) {
      listContainer.removeChild(listContainer.lastChild);
    }
  }
  removeAllCard();
  const cardArray = listStorage.getCard();

  // eslint-disable-next-line array-callback-return
  cardArray.map((card, index) => {
    const createCard = document.createElement("div");
    const createTitle = document.createElement("div");
    const createDesc = document.createElement("div");
    createCard.classList.add("card");
    createTitle.classList.add("card-title");
    createDesc.classList.add("card-desc");
    if (card.project === "default") {
      // eslint-disable-next-line no-param-reassign
      card.index = index;
      createCard.setAttribute("id", `card-${index}`);
      createTitle.textContent = card.title;
      createDesc.textContent = card.desc;
      createCard.appendChild(createTitle);
      createCard.appendChild(createDesc);
      listContainer.appendChild(createCard);
    }
  });
};

export { renderCard, renderProject };
