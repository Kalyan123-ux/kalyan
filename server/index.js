const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const port = 3001
const url= 'mongodb+srv://baduguakhil2004:lFEAjh3yuv8VD1mG@cluster0.w5qqa6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())//parsing
mongoose.connect(url,{useNewUrlParse:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
app.get('/user/search/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const {data,error}=await server.executeOperation({
            query:gql`query{ searchUser(name:${name}){id name email}}`
        });
        if(error){return res.status(500).send(error)}
        res.status(201).send(data)

    }catch(err){
        res.status(500).send(err);
    }
})
async function StartServer(){
    
};