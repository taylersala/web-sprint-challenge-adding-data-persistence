/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  // Inserts seed entries
  await knex('projects').insert([
    { project_name: 'Project Alpha', project_description: 'First project', project_completed: false },
    { project_name: 'Project Beta', project_description: 'Second project', project_completed: true }
  ]);
};

