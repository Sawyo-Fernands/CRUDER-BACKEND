

const mongo=require('mongoose')


mongo.connect("mongodb://localhost/api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongo connect")
}).catch( (error)=>{
    console.log(error)
})

module.exports=mongo