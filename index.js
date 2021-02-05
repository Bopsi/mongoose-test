require("dotenv").config();
const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Success!!");
})
.catch(e => {
    console.error("Connection Failed");
})

const Friend = require("./lib/Friend");

Friend.find({}, (e, friends) => {
    if(e) {
        console.error("No friends")
    } else {
        console.log("My friends are :- ");
        friends.forEach(friend => {
            console.log(`${friend.first_name} ${friend.last_name}`);
        })
    }

    process.exit(0);
})
