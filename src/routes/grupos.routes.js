import * as ctrl from '../controllers/grupo.controller.js'
import {Router} from 'express'

const router = Router()

router.get('/',ctrl.getAllGrupos)
router.get('/:id',ctrl.getGrupoById)
router.post('/',ctrl.createGrupo)

export default router