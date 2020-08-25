import { Router } from 'express'
import { getRepository } from 'typeorm'
import Task from '../models/Task'

const taskRouter = Router()

taskRouter.get('/', async (request, response) => {
  response.json({ data: await getRepository(Task).find() })
})

taskRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Task)
    await repo.save(request.body)
    return response
      .status(201)
      .json({ message: 'Task successfully registered' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
taskRouter.put('/:id', async (request, response) => {
  const task = request.body
  const taskId = request.params.id
  try {
    const repo = getRepository(Task)
    await repo.update(taskId, task)
    return response.status(201).json({ message: 'Task successfully updated' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
taskRouter.put('/', async (request, response) => {
  const task = request.body
  try {
    const repo = getRepository(Task)
    await repo.update(task.id, task)
    return response.status(201).json({ message: 'Task successfully updated' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
taskRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const repo = getRepository(Task)
    await repo.delete(id)
    return response.status(201).json({ message: 'Task successfully deleted' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})

export default taskRouter
