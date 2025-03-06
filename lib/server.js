const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simpan API Keys (Sementara, sebaiknya pakai database)
let apiKeys = {
  "Xlesy-awokawok": "user1",
};

// Middleware untuk mengecek API Key
const checkApiKey = (req, res, next) => {
  const apiKey = req.query.apikey;
  if (!apiKey || !apiKeys[apiKey]) {
    return res.status(403).json({ message: "API Key tidak valid!" });
  }
  next();
};

// Endpoint untuk mendapatkan data (dengan API Key)
app.get("/api/data", checkApiKey, (req, res) => {
  res.json({ message: "Berhasil!", data: "Ini adalah data API" });
});

// Endpoint untuk membuat API Key baru
app.post("/api/generate-key", (req, res) => {
  const newKey = `xlasy-${uuidv4().split("-")[0]}`;
  apiKeys[newKey] = "newUser";
  res.json({ apiKey: newKey });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});