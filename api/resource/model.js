const db = require('../../data/dbConfig');

function getResources() {
  return db('resources');
}

function getResourceById(resource_id) {
  return db('resources').where({ resource_id }).first();
}

async function createResource(resource) {
  const { resource_name, resource_description } = resource;

  const [resource_id] = await db('resources').insert({
    resource_name,
    resource_description,
  });

  return db('resources').where({ resource_id }).first();
}

module.exports = {
  getResources,
  getResourceById,
  createResource,
};

