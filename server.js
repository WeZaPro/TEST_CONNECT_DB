// server.js
require("dotenv").config(); // โหลดค่า .env
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");

// ✅ รองรับ URL-encoded body (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ เปิด CORS ให้ทุก origin
app.use(cors());

// app.use(
//   cors({
//     origin: ["https://your-frontend-domain.com"], // หรือหลาย domain ได้
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

app.use(express.json());

// เชื่อมต่อฐานข้อมูล
db.sequelize.sync().then(() => {
  console.log("✅ Connected to MySQL");
});

// ใช้งาน router
const taxiDriverRoutes = require("./routes/taxiDriver.routes");
app.use("/api/taxiDriver", taxiDriverRoutes);

// Root API
app.get("/", (req, res) => {
  res.send(
    `🚀 API is running successfully!: db DB_USER ${process.env.DB_USER} : db DB_NAME ${process.env.DB_NAME} : db DB_PASSWORD ${process.env.DB_PASSWORD}`
  );
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
