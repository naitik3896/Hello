import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// ⚠️ Dummy token for testing
const TOKEN = "7800991220:AAGoyfLKbo9lJ6iEdPqrl-NUqieh2vuQiEY";
const TELEGRAM_API = https://api.telegram.org/bot7800991220:AAGoyfLKbo9lJ6iEdPqrl-NUqieh2vuQiEY/setWebhook?url=https://hello-kappa-ecru.vercel.app/webhook

app.post("/webhook", async (req, res) => {
  const message = req.body?.message;
  if (message) {
    const chatId = message.chat.id;
    const text = message.text || "";
    const username = message.from?.first_name || "there";

    if (text === "/start") {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: `Hello ${username} 👋 I am your friendly bot!`,
      });
    } else {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: `Hello ${username} 👋`,
      });
    }
  }
  return res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("✅ Telegram bot is running on Vercel!");
});

export default app;
