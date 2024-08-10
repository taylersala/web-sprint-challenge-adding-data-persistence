// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');


router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getResources();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get resources' });
  }
});

// [GET] /api/resources/:resource_id - Retrieve a resource by ID
router.get('/:resource_id', async (req, res, next) => {
  try {
    const resource = await Resource.getResourceById(req.params.resource_id);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    next(error);
  }
});

// [POST] /api/resources - Add a new resource
router.post('/', async (req, res, next) => {
  try {
    const resourceData = req.body;

    if (!resourceData.resource_name) {
      return res.status(400).json({ message: 'Resource name is required' });
    }

    const newResource = await Resource.createResource(resourceData);
    res.status(201).json(newResource);
  } catch (error) {
    next(error);
  }
});

// Handle unknown routes
router.use('*', (req, res) => {
  res.json({ api: 'up' });
});

// Error handling middleware
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something is wrong in resource router',
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
