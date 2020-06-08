const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
const cors = require('cors') 

app.use(cors())
app.use(express.json())


app.listen(port, () => 
console.log(`Creating server on port: ${port}`));


app.use((req, res,) =>{
    res.status(404).send("404 site does not exist");
});