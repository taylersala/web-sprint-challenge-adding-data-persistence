// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
  return db('resources');
}

function getResourceById(resource_id) {
  return db('resources').where({ resource_id }).first();
}

function addResource(resource) {
  return db('resources')
    .insert(resource)
    .then(([resource_id]) => getResourceById(resource_id));
}

function updateResource(resource_id, changes) {
  return db('resources')
    .where({ resource_id })
    .update(changes)
    .then(count => (count > 0 ? getResourceById(resource_id) : null));
}

function deleteResource(resource_id) {
  return db('resources')
    .where({ resource_id })
    .del();
}

module.exports = {
  getResources,
  getResourceById,
  addResource,
  updateResource,
  deleteResource,
};
