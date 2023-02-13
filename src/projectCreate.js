const createProject = (title) => {
  let projectTitle = title;

  const getTitle = () => projectTitle;
  const setTitle = (titleValue) => {
    projectTitle = titleValue;
  };
  return { getTitle, setTitle };
};

export default createProject;
