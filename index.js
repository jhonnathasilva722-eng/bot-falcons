const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = "COLE_SEU_TOKEN_AQUI";

client.once("ready", () => {
  console.log("🦅 Bot ligado com sucesso!");
});

client.login(TOKEN);