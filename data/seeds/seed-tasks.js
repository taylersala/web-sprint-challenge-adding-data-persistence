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
      task_completed: 0,
      project_id: 1
    },
    {
      task_description: 'Design database schema',
      task_notes: 'Define tables and relationships',
      task_completed: 1,
      project_id: 1
    },
    {
      task_description: 'Implement API endpoints',
      task_notes: 'Create CRUD operations for projects',
      task_completed: 0,
      project_id: 2
    },
    {
      task_description: 'Write unit tests',
      task_notes: 'Ensure code coverage for all functionalities',
      task_completed: 0,
      project_id: 2
    }
  ]);
};




/*  

http get :9000/api/project
(database is empty will return empty)

http post :9000/api/project 
(will return project name required)

http post :9000/api/project project_name="testing"
(will return new)

http get :9000/api/project
(now returns data)

http get :9000/api/project/1 
(now also returns correct data)


^This should satisy projects tests




http get :9000/api/resource
(database is empty will return empty)

http post :9000/api/resource 
(will return resource name required)

http post :9000/api/resource resource_name="testing"
(will return new)

http get :9000/api/resource
(now returns data)

http get :9000/api/resource/1 
(now also returns correct data)

^This should satisfy resource tests




http get :9000/api/task
(database is empty will return empty)

http post :9000/api/task 
(will return task description required)

http post :9000/api/task task_description="testing"
(will return project ID is required)

http post :9000/api/task task_description="testing" project_id=1
(will return new)

http get :9000/api/task
(now returns data)

http get :9000/api/task/1 
(now also returns correct data)

^This should satisfy task tests


/*