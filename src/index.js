const app = require('./app');
require('dotenv').config();
const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, console.log('Server started running on port', 3000));