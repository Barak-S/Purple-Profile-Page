const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users.js");
const app = express();
const cors = require('cors')

app.use(cors())
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db || 'mongodb://localhost/your-app-name'
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Routes

// Test route
app.get('/test', (req, res)=>{
    res.send('baraks user backend') 
})

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));