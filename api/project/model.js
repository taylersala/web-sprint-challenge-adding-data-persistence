// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const allProjects = await db('projects')
    return allProjects
}

function getProjectById(project_id) {
  return db('projects').where({ project_id }).first();
}

async function createProject(project) {
    const { project_name, project_description, project_completed = false } = project;
    const [project_id] = await db('projects').insert({
      project_name,
      project_description,
      project_completed: Boolean(project_completed),
    });
  
    return db('projects').where({ project_id }).first();
  }
  

module.exports = {
  getProjects,
  getProjectById,
  createProject,
};