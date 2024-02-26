import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './router/route.js'
import path from 'path'
const __dirname = path.resolve();
const app =express()
dotenv.config()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',Router);
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('*', function(_, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(error){
        res.status(500).send(err);
    })
})
const PORT = 8000||process.env.port;
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD
Connection(USERNAME,PASSWORD)
app.listen(PORT,console.log(`server is running fine on port${PORT}`))
DefaultData()