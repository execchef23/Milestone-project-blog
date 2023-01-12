// Modules and Globals
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const PORT = process.env.PORT || 3001;

//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`)
  }
)

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });