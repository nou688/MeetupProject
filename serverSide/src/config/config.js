const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    development: {
        database_url:process.env.MONGO_LOCAL_CONN_URL,
        database_name:process.env.MONGO_DB_NAME,
        port: process.env.PORT,
        node_env: process.env.NODE_ENV,
        hostname:process.env.HOSTNAME,
    }

};
