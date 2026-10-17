const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const PORT = 5000;

app.use(cors());
app.use(express.json());


// app.get('/api/products', (req, res) => {
//   res.json({ message: "Hello from the Node.js + Express backend!" });
// });

app.get('/api/products', (req, res) => {
const data = fs.readFileSync("./data/products.json", "utf-8");
const products = JSON.parse(data);
res.json(products);
});





console.log("Display Console info.");

app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`); 
});