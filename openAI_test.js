//import OpenAI from "openai";
let OpenAI = require("openai")
const openai = new OpenAI();

console.log('the key is: ',process.env.OPENAI_API_KEY)

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [    {"role": "system", "content": "You are a bot that analysis weather data and produce simple and easy to understand text for uneducated farmers"},
    {"role": "assistant", "content": 
    `from this data ${wdata} , generate informative text on rainfall to inform an farmers about the weather and irrigation advice`}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
