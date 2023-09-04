const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, (err) => {
      if (err) console.error(`Server not running. Error message: ${err.message}`)

      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (err) {
    console.error(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  }
}

start();