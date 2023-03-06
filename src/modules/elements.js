import * as projectClass from "./projectClass";

export const section = document.getElementById("projects-section");
export const addProject = document.getElementById("add-project");
export const tasksSection = document.getElementById("tasks-section");
export const projectsContainer = projectClass.projectsContainer();
export const main = document.querySelector("main");
export const storageProjects = JSON.parse(localStorage.getItem("projects"));
export const taskModal = document.getElementById("modal");
export const form = document.querySelector("form");
export const formTitle = document.getElementById("title");
export const formDescription = document.getElementById("description");
export const formDueDate = document.getElementById("date");
export const formPriority = document.getElementById("priority");
