import * as grupoModelo from '../models/grupo.model.js'

export const getAllGrupos = async (req,res)=>{
    try {
        const grupos = await grupoModelo.getAllGrupos();
        res.status(200).json(grupos)   
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getGrupoById = async (req,res)=>{
    try {
        const grupo = await grupoModelo.getGrupoById(req.params.id)
        if(!grupo)
            res.status(404).json({message:'Como el amor de ella ***no encontrado :´( ***'})
        res.status(200).json(grupo)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const createGrupo = async (req,res)=>{
    try {
        if(!req.body.nombre_grupo)
            return res.status(400).json({message:'No fue agregado el nombre'})
        const nuevo= await grupoModelo.createGrupo(req.body)
        res.status(201).json(nuevo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}