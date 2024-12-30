const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./Model/Users');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));

// Login Route
app.post('/LoginPage', (req, res) => {
    const { username, password } = req.body;

    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});


app.post('/RegisterPage', (req, res) => {
    const { username, email, password } = req.body;

  
    UserModel.findOne({ $or: [{ username: username }, { email: email }] })
        .then(existingUser => {
            if (existingUser) {
               
                if (existingUser.username === username) {
                   res.json("Username already taken");
                   window.alert("Username already taken");
                   
                } else if (existingUser.email === email) {
                   res.json("Email already registered");
                    window.alert("Email already registered");
                
                }
            } else {
                
                UserModel.create({ username, email, password })
                    .then(newUser => res.json(newUser))
                    .catch(err => {
                        console.error(err);
                        res.status(500).json("Error registering user");
                       window.alert("An error occurred, please try again later!")
                    });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
