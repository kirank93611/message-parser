const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define your routes for handling messages and paragraphs.
// You can also serve as an API for external sources of data.
// Example routes:
app.post('/store-message', (req, res) => {
    // Process and store the received message.
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
const Message = mongoose.model('Message', { content: String });

app.post("/store-message",(req,res)=>{
    const { message }=req.body;
    const newMessage =new Message({ content: message });

    newMessage.save((err)=>{
        if(err) {
            console.error(err);
            return res.status(500).send("Error Storing message");
        }
        res.status(201).send("Message Read Successfully");
    });
});