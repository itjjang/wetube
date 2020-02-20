// Challenge - Day4
import express from "express";
const app = express();

const PORT = 5000;

app.use((req, res, next) => {
    console.log("I'm a middleware");
    if(req.url.startsWith("/protected")) {
        res.writeHead(302, { Location: "/" });
        res.end();
    }
    next();
});

app.get("/",          (req, res) => res.end("Hi~Home"));
app.get("/about-us",  (req, res) => res.end("Hi~About Us"));
app.get("/contact",   (req, res) => res.end("Hi~Contact"));
app.get("/protected", (req, res) => res.end("Hi~Protected"));

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
