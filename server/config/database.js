//import krna achi practice achi hoti shurr me krna
const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection success"))
    .catch((error) => {
        console.log("DB connection failed");
        console.error(error);
        process.exit(1);
    }) 
};
