import * as ctrl from '../controllers/grupo.controller.js'
import verificador from '../midleware/auth.midleware.js'
import {Router} from 'express'

const router = Router()
//rutas publicas 
router.get('/', verificador, ctrl.getAllGrupos)
router.get('/:id',ctrl.getGrupoById)

//ruta protegida
router.post('/', verificador, ctrl.createGrupo)

export default router