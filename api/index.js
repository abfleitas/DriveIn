const server = require("./src/app.js")
const { connect } = require('./src/db.js');
const { DB_FORCE } = process.env;

connect.sync({ force: false }).then(() => {
    server.listen(process.env.PORT, () => {
      console.log('listening at 3001'); 
  });
});