import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: "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",
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
