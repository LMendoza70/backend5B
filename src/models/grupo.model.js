import db from '../config/db.js'

export const getAllGrupos= async ()=>{
    const [rows]= await db.query('select * from grupos where activo=1')
    return rows
}

export const getGrupoById= async (id)=>{
    const [rows]= await db.query('select * from grupos where activo=1 and id_grupo=?',[id])
    return rows[0]
}

export const createGrupo = async({nombre_grupo, descripcion, activo})=>{
    const [restult]=await db.query(
        'insert into grupos(nombre_grupo, descripcion, activo) values (?,?,?)'
        ,[nombre_grupo,descripcion || null,activo || null])
    return {id:restult.insertId, nombre_grupo, descripcion, activo}
}