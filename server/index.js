const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require("multer");
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productsRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');


dotenv.config();

// Database Connection
const uri = process.env.MONGO_URL;
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"));
db.once('open', () => {
    console.log("Connected to mongo db");
})

// // Middlewares
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

//"Handling File Upload"
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json(req.body);
    } catch(e){
        console,log(e);
    } 
});

// const upload = multer({ storage: storage });
// app.post('/api/upload', upload.single("file"), (req, res) => {
//     const file = req.file;
//     res.status(200).json(file.filename);
// })

// End Points
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/relationships", relationshipRoutes);

app.listen(8800, () => {
    console.log("Api Online")
}) 