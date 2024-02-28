const express = require('express');
const cors = require('cors');
const {JWT_SECRET}= require('./config.js')
const rootRouter = require('./routes/index.js');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use('/api/v1', rootRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT} `)
})