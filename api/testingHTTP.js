/*  

Not sure whats going on with my tests and why they wont pass but everything returns as it should if youre able to run on port 9000 Ive made it easy to copy and paste to double check everything. Maybe I am missing something but I feel they should pass given the returns and it updating in SQL.

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