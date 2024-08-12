// build your `Project` model here
// Project model (model.js)
const db = require('../../data/dbConfig');

function convertToBoolean(project) {
  return {
    ...project,
    project_completed: !!project.project_completed 
  };
}

async function getProjects() {
  const projects = await db('projects');
  return projects.map(convertToBoolean);
}

async function getProjectById(project_id) {
  const project = await db('projects')
    .where({ project_id })
    .first();

  // Convert project_completed to a boolean
  return {
    ...project,
    project_completed: project.project_completed ? true : false
  };
}


async function createProject(project) {
  const [project_id] = await db('projects').insert(project);
  const newProject = await db('projects').where({ project_id }).first();
  return convertToBoolean(newProject);
}

module.exports = {
  getProjects,
  createProject,
  getProjectById
};

