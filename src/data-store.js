/* eslint-disable func-names */
const listStorage = (() => {
  let storedArray = [];
  const initialArray = [];
  const setList = (array) => {
    storedArray = array;
  };
  function CardArrayCreator(
    title,
    desc,
    date,
    prio,
    index,
    project = "default"
  ) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.prio = prio;
    this.index = index;
    this.project = project;
  }

  CardArrayCreator.prototype.setIndex = function (index) {
    this.index = index;
  };
  CardArrayCreator.prototype.setProject = function (project) {
    this.project = project;
  };
  const initializeCard = (array) => {
    initialArray.push(array);
    localStorage.setItem("initialData", JSON.stringify(array));
  };
  const getInitialData = () => {
    const startData = localStorage.getItem("initialData");
    const parseData = JSON.parse(startData);
    return parseData;
  };
  const addCard = (card) => {
    const cardConverted = new CardArrayCreator(
      card.getTitle(),
      card.getDesc(),
      card.getDueDate(),
      card.getCardPrio(),
      storedArray.length
    );
    storedArray.push(cardConverted);
    localStorage.setItem("cardList", JSON.stringify(storedArray));
  };

  const getCard = () => {
    const returnData = localStorage.getItem("cardList");
    const parsedData = JSON.parse(returnData);
    return parsedData;
  };

  return { addCard, getCard, setList, initializeCard, getInitialData };
})();

export default listStorage;
