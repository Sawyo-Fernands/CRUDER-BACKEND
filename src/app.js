
const express=require('express')

const app=express()

const Post=require('../src/Models/post')

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.listen(5000,()=>{

    console.log("Server connect")
})


app.post("/create",async (req,res)=>{

    try{

        const {title,description,content}=req.body

        const post= await Post.create({title,description,content})
    
        res.send({post})

    }catch(error){

        res.send(error)

    }

})

app.get('/push',async(req,res)=>{

    try{

        const post=await Post.find()

        res.send({post})


    }catch(error){
        res.send(error)
    }


})

app.patch("/edit/:id", async (req,res)=>{

        try{

            const id=req.params.id

            const {title,description,content}=req.body
    
            const post= await Post.findByIdAndUpdate(id,{title,description,content},{new:true})
    
            res.send({post})

        }catch(error){
            res.send(error)
        }

})

app.delete('/delete/:id',async (req,res)=>{

    try{ 
        const id=req.params.id

         await Post.findByIdAndDelete(id)

         res.send({"msg":"Post deletado com sucesso"})

    }catch(error){
        res.send(error)
    }


})

app.get('/show/:id',async (req,res)=>{

    try{
        const id=req.params.id

        const post=await Post.findById(id)
    
        res.send({post})
        
    }catch(error){
        res.send(error)
    }
})

