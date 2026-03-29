const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  ignoreTLS: true,
});

app.post("/send-email", async (req, res) => {
  const { name, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: "contact@trouve-ton-artisan.fr",
      to: "jean.dupont@email.com",
      subject: subject,
      text: `Nom: ${name}\n\nMessage:\n${message}`,
    });

    res.status(200).send("Email envoyé");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur envoi");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));