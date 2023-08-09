const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!!');
    })
    .catch(err => {
        console.log("Oh No error");
        console.log(err);
    })
