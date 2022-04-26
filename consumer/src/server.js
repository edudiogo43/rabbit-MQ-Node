const { config } = require("dotenv");
config();

const express = require("express");
const app = express();

const messageChannel = require("../messages/MessageChannel");

const PORT = process.env.PORT;

messageChannel.consumeMessages();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})