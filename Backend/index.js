const express = require('express');
const cors = require('cors');
const {JWT_SECRET}= require('./config.js')
const rootRouter = require('./routes/index.js');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use('/api/v1', rootRouter);



app.use( (req, res) => {
    const err =  new Error( 'File not found');
    err.status = 404;
    throw err
})

app.use((err, req, res, next) => {  
    res.status(err.status || 500).json({
        message: err.message || "Oops! Something went wrong"
    })
})
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT} `)
})

