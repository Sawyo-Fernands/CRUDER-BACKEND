
const mongo=require('../database/mongo')


const PostSchema=new mongo.Schema({

    createdAt:{
        type:Date,
        default:Date.now()
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

})

const Post= mongo.model('Post',PostSchema)

module.exports=Post