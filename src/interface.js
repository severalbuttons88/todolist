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
  const createDiv = document.createElement('div');
  createDiv.classList.add("card");
  const cardArray = listStorage.getCard();
};
