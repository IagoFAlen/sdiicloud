const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({message:'Servidor do trabalho de SDII ok'});
})

app.listen(3333)

