const listStorage = (() => {
  let storedArray = [];
  const initialArray = [];
  const setList = (array) => {
    storedArray = array;
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
    storedArray.push(card);
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
