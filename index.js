const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { ask } = req.body;

    const completion = await openai.chat.completions.create({
      messages: [
        {"role": "system", "content": "You are a bot that helps with mental health advice"},
        {"role": "assistant", "content": `${ask}`},
      ],
      model: "gpt-3.5-turbo",
    });

    const response = completion.choices[0].message.content;
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});