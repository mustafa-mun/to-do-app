export default function trackID(project, arrayID) {
  const copyProject = project;
  copyProject.id = arrayID + 1;
}
