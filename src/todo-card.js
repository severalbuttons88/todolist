const createTodoCard = (title, description, dueDate, priority) => {
  let cardTitle = title;
  let cardDesc = description;
  let cardDueDate = dueDate;
  let cardPrio = priority;

  const getTitle = () => cardTitle;
  const getDesc = () => cardDesc;
  const getDueDate = () => cardDueDate;
  const getCardPrio = () => cardPrio;

  const setTitle = (titleValue) => {
    cardTitle = titleValue;
  };
  const setDesc = (descValue) => {
    cardDesc = descValue;
  };
  const setDueDate = (dueValue) => {
    cardDueDate = dueValue;
  };
  const setCardPrio = (prioValue) => {
    cardPrio = prioValue;
  };



  return {
    getTitle,
    getDesc,
    getDueDate,
    getCardPrio,
    setCardPrio,
    setDesc,
    setDueDate,
    setTitle,
  };
};

export default createTodoCard;
