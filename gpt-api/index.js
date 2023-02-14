const { restart } = require("nodemon");
const express = require("express");
const app = express();
// openAI config
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// SHOW API ENDPOINT On /API
app.get('/api', async (req, res) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
    });
    console.log(response);
    res.status(200).send(response.data.choices);
})



// throw new Error('Error');
const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));


