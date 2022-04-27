import { MessageOptions, MessagePayload, Snowflake } from "discord.js"
import { client } from "src/bot"

export async function sendDm(
  userId: Snowflake,
  content: string | MessagePayload | MessageOptions,
) {
  const user = await client.users.fetch(userId)
  if (!user) throw new Error("User not found")

  user.send(content).catch((err) => {
    throw new Error(err)
  })
}
