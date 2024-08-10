// start your server here
const server = require('./api/server');

const port = process.env.port || 9000;

server.listen(port, () => console.log(`server running on port ${port}`))

