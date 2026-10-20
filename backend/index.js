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

// Sample user data for visualization
// {id: "c2576d53-e5c5-46e4-b6b5-8743ec59db64", email: "emanuelnnko@gmail.com", firstName: "Emanuel", lastName: "Nnko", password: 123}
users = [
        {"id": "c2576d53-e5c5-46e4-b6b5-8743ec59db64", "email": "emanuelnnko@gmail.com", "firstName": "Emanuel", "lastName": "Nnko", "password": 123, "role": "admin"}
    ]

app.post("/api/users/login", (req, res) => {
    // const data = fs.readFileSync("./data/users.json", "utf-8");
    // console.log(data);
    // const database = JSON.parse(data);
    // console.log(data);
    // console.log(req.body);

        const foundUser = users.find(user => user.email === req.body.loginEmail && user.password === req.body.loginPassword);
        
        console.log(users);
        console.log(foundUser);
        if (!foundUser) {
            // status code: 404 - No matching
            return res.json("Fail to log in");
        } else {
            // status code: 200 OK - response is successful
            res.json(foundUser);
            console.log(`Matched:, foundUser`);
            console.log("yes");
        }
    
    
//     if (database) {
//         const foundUser = database.users.find(user => user.email === req.body.loginEmail && user.password === req.body.loginPassword);
        
//         console.log(foundUser);
//         if (!foundUser) {
//             // status code: 404 - No matching
//             return res.json("Fail to log in");
//         } else {
//             // status code: 200 OK - response is successful
//             res.json(foundUser);
//             console.log(`Matched:, foundUser`);
//             console.log("yes");
//         }
//     }
    
    
});





console.log("Display Console info.");

app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`); 
});