import { Router } from 'express'
import frameRouter from './frame.routes'
import taskRouter from './task.routes'
const routes = Router()

routes.use('/api/frames', frameRouter)
routes.use('/api/tasks', taskRouter)

export default routes
