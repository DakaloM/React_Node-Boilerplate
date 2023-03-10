import  express from 'express';
const app = express();
import { db } from "./connect.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from "multer";

// Database Connection
db.connect((err) => {
    if(err) {
        console.log("Error connecting to database", err);
        return;
    }

    console.log("Connected to Mysql as:", db.threadId);
})

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(express.json()); // this line enable us to send json data to the backend
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})

// End Points
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/relationships", relationshipRoutes);

app.listen(8800, () => {
    console.log("Api Online")
}) 