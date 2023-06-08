import express from "express";
import * as mysql from "./lib/mysql";

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log("success connection!!");
    mysql.connect();
});
