// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('tasks.*', 'projects.project_name', 'projects.project_description');
}

function getTaskById(task_id) {
  return db('tasks')
    .where({ task_id })
    .first()
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('tasks.*', 'projects.project_name', 'projects.project_description');
}

function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(([task_id]) => getTaskById(task_id));
}

function updateTask(task_id, changes) {
  return db('tasks')
    .where({ task_id })
    .update(changes)
    .then(count => (count > 0 ? getTaskById(task_id) : null));
}

function deleteTask(task_id) {
  return db('tasks')
    .where({ task_id })
    .del();
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
