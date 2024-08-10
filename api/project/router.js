
const router = require('express').Router();
const Projects = require('./model');

router.get('/', async (req, res, next) => {
    try {
      const projects = await Projects.getProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get projects' });
    }
  });

router.get('/:project_id', (req, res, next) => {
    Projects.getProjectById(req.params.project_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
      const projectData = req.body;
  
      if (!projectData.project_name) {
        return res.status(400).json({ message: 'Project name is required' });
      }
  
      const newProject = await Projects.createProject(projectData);
      res.status(201).json(newProject);
    } catch (error) {
      next(error);
    }
  });

router.use('*', (req, res) => {
    res.json({ api: 'up'})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something is wrong in project router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router;
