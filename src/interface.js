/* eslint-disable no-unused-vars */
import listStorage from "./data-store";

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

const renderCard = () => {
  const listContainer = document.querySelector("#list-container");


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

export default renderCard;
