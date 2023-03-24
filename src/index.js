//1. Import
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//2. Routes
const authRoutes = require("./Routes/auth.route");

//3. Port
const PORT = process.env.PORT;

//4. Connect
const connect = require("./Config/db");

//5. Create App
const app = express();

//6. App use
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

//7. Basic Route
app.get("/", (req, res) => {
    res.status(200).send("Backend of PayPal")
});

//8. Listen
app.listen(PORT, async () => {
    await connect();
    console.log(`http://localhost:${PORT}`)
});