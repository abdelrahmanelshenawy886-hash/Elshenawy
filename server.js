import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import Groq from "groq-sdk";

dotenv.config();
console.log(process.env.GROQ_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// قراءة قاعدة البيانات مرة واحدة
const qaContext = fs.readFileSync("qa-data.txt", "utf8");

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            temperature: 0.2,
            messages: [
                {
                    role: "system",
                    content: `
أنت BATU Guide AI.

اعتمد فقط على المعلومات الموجودة هنا:

${qaContext}

القواعد:
1- أجب اعتماداً على البيانات فقط.
2- إذا لم تجد الإجابة قل:
"عذراً، لا أملك معلومات عن ذلك."
3- إذا كان السؤال بالعربية أجب بالعربية.
4- إذا كان السؤال بالإنجليزية أجب بالإنجليزية.
5- كن مختصراً وواضحاً.
`
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        res.json({
            reply: completion.choices[0].message.content
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            reply: "حدث خطأ في الخادم."
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running : http://localhost:${PORT}`);
});