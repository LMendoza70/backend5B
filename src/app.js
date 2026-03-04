import express from 'express';
import dotenv from 'dotenv';
import grupoRoutes from './routes/grupos.routes.js'

//creamos la instancia de nuestro servidor 
const app=express();
//definimos la variables de entrono a utilizar 
dotenv.config()
const port = process.env.PORT || 3000

//definimos el midleware para trabajar con json 
app.use(express.json())

//agregamos las rutas con las que voy a trabajar 
//rutas de grupos 
app.use('/api/grupos',grupoRoutes)

app.get('/',(req,res)=>{
    res.send("Esta es mi primer API... 5B ya publicada en vercel ")
})

app.listen(port,()=>{
    console.log("Aplicacion de express corriendo en el puerto "+port)
})
