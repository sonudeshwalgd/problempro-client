import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_OpenAIApi,
  })
)

const generateAI=async(payload)=>{
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: payload }],
  })
  return response
}

export default generateAI
