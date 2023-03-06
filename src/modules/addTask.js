export default function addTask(arr, title, description, dueDate, priority) {
  const outputArr = arr;
  const obj = {
    title,
    description,
    dueDate,
    priority,
    isDone: false,
  };
  outputArr.push(obj);
  return outputArr;
}
