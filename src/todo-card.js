const createTodoCard = (title, description, dueDate, priority) => {
  let cardTitle = title;
  let cardDesc = description;
  let cardDueDate = dueDate;
  let cardPrio = priority;
  let cardProps = {};

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
  function combineProperties(titleVal, desc, date, prio) {
    cardProps = {
      title: `${titleVal}`,
      desc: `${desc}`,
      dueDate: `${date}`,
      prio: `${prio}`,
    };
  }
  combineProperties(cardTitle, cardDesc, cardDueDate, cardPrio);

  const getProperties = () => cardProps;

  return {
    getTitle,
    getDesc,
    getDueDate,
    getCardPrio,
    setCardPrio,
    setDesc,
    setDueDate,
    setTitle,
    getProperties,
  };
};

export default createTodoCard;
