import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // directory name for the project

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public")); // tells express that public folder files are static

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("main.ejs");
})

app.get("/sample", (req, res) => {
    res.render("sample.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})