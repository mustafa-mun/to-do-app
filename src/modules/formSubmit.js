// import format from "date-fns/format";
// import parseISO from "date-fns/parseISO";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
import addTask from "./addTask";

// import addTasksToDOM from "./tasksDOM";

export default function formSubmitter(
  project,
  // array,
  title,
  description,
  dueDate,
  priority
) {
  if (project) {
    addTask(project, title, description, dueDate, priority);
    // Update local storage after adding task.

    // const distance = formatDistanceToNow(parseISO(dueDate)); // You can use this to add upcoming tasks.
    // console.log(`The distance between this task and today is ${distance}`);
  }
}
