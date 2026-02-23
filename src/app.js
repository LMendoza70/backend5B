import express from 'express';

const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("Esta es mi primer API... 5B ")
})

app.listen(PORT,()=>{
    console.log("Aplicacion de express corriendo en el puerto "+PORT)
})
