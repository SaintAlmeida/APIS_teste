const express = require('express');
const app = express();
const data = require('./data.json');

// Verbos HTTP
// GET : Recebe dados de um Resource
// POST: Envia dados para o Resource
// PUT: Atualiza dados do Resource
// DELETE : Deleta um ressource
app.use(express.json());


app.get("/clients",function(req,res) {
    res.json(data);

});

app.get("/clients/:id",function(req,res) {
   
    const {id} = req.params;
    const client = data.find(cli => cli.id = id);
    if(!client) return res.status(204).json(); 

    res.json(client);

});

app.post("/clients:id",function(req,res) {});
app.put("/clients:id",function(req,res) {});
app.delete("/clients:id",function(req,res) {});


app.listen(3000, function(){
    console.log('Server is Running');
});