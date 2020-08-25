import { Router } from 'express'
import { getRepository } from 'typeorm'
import Frame from '../models/Frame'
const frameRouter = Router()

frameRouter.get('/', async (request, response) => {
  const frames = await getRepository(Frame).find({
    relations: ['tasks'],
    order: {
      collocation: 'ASC'
    }
  })
  response.json({
    data: await orderTasksByCollocation(frames)
  })
})
async function orderTasksByCollocation (frames: Array<any>) {
  const framesCustom = []
  for (const frame of frames) {
    frame.tasks = frame.tasks.sort(function (a, b) {
      return a.collocation < b.collocation ? -1 : 1
    })
    framesCustom.push(frame)
  }
  return framesCustom
}
frameRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Frame)
    await repo.save(request.body)
    return response
      .status(201)
      .json({ message: 'Frame successfully registered' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
frameRouter.put('/:id', async (request, response) => {
  const frame = request.body
  const frameId = request.params.id
  try {
    const repo = getRepository(Frame)
    await repo.update(frameId, frame)
    return response.status(201).json({ message: 'Frame successfully updated' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
frameRouter.put('/', async (request, response) => {
  const frame = request.body
  delete frame.tasks
  try {
    const repo = getRepository(Frame)
    await repo.update(frame.id, frame)
    return response.status(201).json({ message: 'Frame successfully updated' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})
frameRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const repoFrame = getRepository(Frame)
    await repoFrame.delete(id)
    return response.status(201).json({ message: 'Frame successfully deleted' })
  } catch (err) {
    throw response.status(400).json({ message: err.message })
  }
})

export default frameRouter
