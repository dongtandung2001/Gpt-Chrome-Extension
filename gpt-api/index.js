const { restart } = require("nodemon");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// SHOW API ENDPOINT On /API
app.get('/api', async (req, res) => {

    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "What is worm in cyber security" }],
    });
    console.log(completion.data.choices[0].message);
    res.send("Succesful");
})


// throw new Error('Error');
const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));



