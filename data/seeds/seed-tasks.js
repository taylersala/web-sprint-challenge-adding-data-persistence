/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del();

  await knex('tasks').insert([
    {
      task_description: 'Setup project structure',
      task_notes: 'Create initial folders and files',
      task_completed: true,
      project_id: 1
    },
    {
      task_description: 'Design database schema',
      task_notes: 'Define tables and relationships',
      task_completed: false,
      project_id: 1
    },
    {
      task_description: 'Implement API endpoints',
      task_notes: 'Create CRUD operations for projects',
      task_completed: false,
      project_id: 2
    },
    {
      task_description: 'Write unit tests',
      task_notes: 'Ensure code coverage for all functionalities',
      task_completed: false,
      project_id: 2
    }
  ]);
};

