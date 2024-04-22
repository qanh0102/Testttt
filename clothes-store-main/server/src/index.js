const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const newsRouter = require("./routes/news");

const app = express();
const PORT = 8000;

//Connect to db
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.use(cors());

// Sử dụng router cho endpoint '/api/news'
app.use(newsRouter);

app.listen(PORT, () => {
    console.log(`Server started on  http://localhost:${PORT}`);
});
