const router = require('express').Router();
const Tasks = require('./model');
const Projects = require('../project/model'); 

function convertTaskCompleted(task) {
  return {
    ...task,
    task_completed: task.task_completed ? true : false
  };
}

router.get('/', async (req, res, next) => {
  try {
    let tasks = await Tasks.getTasks();
    tasks = tasks.map(convertTaskCompleted);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
});

router.get('/:task_id', async (req, res, next) => {
  try {
    let task = await Tasks.getTaskById(req.params.task_id);
    if (task) {
      task = convertTaskCompleted(task);
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const taskData = req.body;

    if (!taskData.task_description) {
      return res.status(400).json({ message: 'Task description is required' });
    }

    if (!taskData.project_id) {
      return res.status(400).json({ message: 'Project ID is required' });
    }

    const project = await Projects.getProjectById(taskData.project_id);
    if (!project) {
      return res.status(400).json({ message: 'Invalid project ID' });
    }

    let newTask = await Tasks.createTask(taskData);
    newTask = convertTaskCompleted(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

router.use('*', (req, res) => {
  res.json({ api: 'up' });
});


router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something is wrong in task router',
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
