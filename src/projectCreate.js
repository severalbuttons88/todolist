const createProject = (title) => {
  let projectTitle = title;
  let cardList = [];

  const getTitle = () => projectTitle;
  const setTitle = (titleValue) => {
    projectTitle = titleValue;
  };
  const addCard = (card) => {
    cardList = cardList.push(card);
  };
  const getCardList = () => cardList;
  const targetCard = (index) => cardList[index];
  /*   const updateList = () => {

  } */

  return { getTitle, setTitle, addCard, getCardList, targetCard };
};

export default createProject;
