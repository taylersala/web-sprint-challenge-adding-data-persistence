// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router')
// const resourcesRouter = require('./resource/router')

const server = express();

server.use(express.json());

server.use('/api/project', projectsRouter);
//server.use('/api/resource', resourcesRouter);

module.exports = server;

