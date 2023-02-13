/* eslint-disable func-names */
const listStorage = (() => {
  let storedArray = [];
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

  return { addCard, getCard, setList };
})();

const projectStorage = (() => {
  let projectArray = [];
  const setArray = (array) => {
    projectArray = array;
  };
  function setStorage(array) {
    localStorage.setItem("projectList", JSON.stringify(array));
  }
  const removeProject = (index) => {
    const storageArray = projectStorage.getProject();
    storageArray.splice(index, 1);
    setStorage(storageArray);
  };
  function ProjectArrayCreator(title) {
    this.title = title;
  }
  const addProject = (project) => {
    const convertProject = new ProjectArrayCreator(project.getTitle());
    projectArray.push(convertProject);
    localStorage.setItem("projectList", JSON.stringify(projectArray));
  };
  const getProject = () => {
    const data = localStorage.getItem("projectList");
    const parseData = JSON.parse(data);
    return parseData;
  };
  return { addProject, getProject, setArray, removeProject };
})();
const firstTimeStorage = () => {
  if (listStorage.getCard() === null) {
    return true;
  }
  return false;
};
const emptyProject = () => {
  if (projectStorage.getProject() === null) {
    return true;
  }
  return false;
};
export { listStorage, projectStorage, firstTimeStorage, emptyProject };
