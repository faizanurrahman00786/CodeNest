const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());

const fileUpload = require("express-fileupload");
app.use(fileUpload({
	useTempFiles: true,
	tempFileDir: "/tmp"

}))

const cors = require("cors");
app.use(
	cors({
		origin: ["https://ed-tech-beta-orcin.vercel.app","https://ed-tech-beta-orcin.vercel.app/"],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
)

const connect = require("./config/database");
connect();

const cloudinary = require("./config/cloudinary");
cloudinary();

const user = require("./routes/User")
const course = require("./routes/Course")
const profile = require("./routes/Profile")
const payments = require("./routes/Payments")

app.use("/api/v1/auth", user)
app.use("/api/v1/course", course)
app.use("/api/v1/profile", profile)
app.use("/api/v1/payment", payments)

app.listen(PORT, function () {
	console.log("Server is running at port no:", PORT);
});

app.get("/", (req,res) => {
    res.send(`<h2> This is HomePage</h2>`);
})
