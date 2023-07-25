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
