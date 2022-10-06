const WebSocket = require('ws')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

let eigenWS = new WebSocket("ws://13.56.165.44:8546");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

eigenWS.onopen = function (e) {
    console.log("[open] Connection established");
    console.log("Sending to server");
    const msg = { id: 1, method: "eth_subscribe", params: ["newHeads"] };

    eigenWS.send(JSON.stringify(msg));
  };

  eigenWS.onmessage = async(event) => {
    const hello = await event.data;
    console.log(hello)
  };

const querysRouter = require('./routes/querys')
const solcC = require('./routes/solc')

app.use('/querys', querysRouter);
app.use('/solc', solcC);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});