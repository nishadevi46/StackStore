import express from 'express'
const app =express()


const PORT = 8000||process.env.port;

app.listen(PORT,console.log(`server is running fine on port${PORT}`))
