const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api',(req,res) => {
    console.log('inside GET /api')
    res.json({
        msg:`Welcome to Demo APIs`,
        success:true
    });
})

app.post('/api/square',(req,res) => {
    console.log('Inside POST /api/square')
    console.log(req.body)
    const number = req.body.number
    const result = number ** 2;
    
    
    res.json({
        success:true,
        msg:`Square of ${number} is ${result}`,
        result:result
    })
})

app.use('*',(req,res,next) => {
    console.log('No such routes...')
    return res.status(500).json({
        error: `No such routes...`
    })
})

app.listen(PORT,() => {
    console.log(`server started on ${PORT}`)
})
