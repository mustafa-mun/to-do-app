export const project = (name) => {
  const id = 1;
  const tasks = [];
  return { name, id, tasks };
};

export const projectsContainer = () => {
  const projects = [];
  const addProject = (newProject) => {
    projects.push(newProject);
  };
  return { projects, addProject };
};
