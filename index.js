// start your server here
//require('dotenv').config()
const server = require('./api/server.js');

const port = process.env.port || 9000;

server.listen(port, () => console.log(`server running on port ${port}`))

