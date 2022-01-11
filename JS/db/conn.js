const mongoose = require('mongoose');

//creating a database
mongoose.connect("mongodb://localhost:27017/sachinbhardwaj", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('connection successfull')
}).catch((error)=>{
    console.log(error);
})

console.log(' hit connection')