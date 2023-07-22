// imports
const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const axios = require('axios');
// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World from inventory service");
});


app.post("/billing-service", (req, res) => {
    console.log('billing service')
    const postData = JSON.stringify(req.body);
    const headers = {
        'Content-Type': 'application/json'
    }

    axios.post('http://shipping-service:3002/shipping', postData, {headers})
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
      res.send("Billing service");
});

app.listen(3004, () => {
    console.log("running on 3004")
});
