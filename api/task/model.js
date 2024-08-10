const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')
    .join('projects', 'tasks.project_id', 'projects.project_id');
}


function getTaskById(task_id) {
  return db('tasks')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .where({ 'tasks.task_id': task_id })
    .first();
}

async function createTask(task) {
  const { task_description, task_notes, task_completed = false, project_id } = task;


  const [task_id] = await db('tasks').insert({
    task_description,
    task_notes,
    task_completed: Boolean(task_completed),
    project_id
  });

  return db('tasks')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .where({ 'tasks.task_id': task_id })
    .first();
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
};
