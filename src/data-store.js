const listStorage = (() => {
  let storedArray = [];
  const setList = (array) => {
    storedArray = array;
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

  return { addCard, getCard, setList };
})();

export default listStorage;
