import { EntityRepository, Repository } from 'typeorm'
import Frame from '../models/Frame'

@EntityRepository(Frame)
export default class FrameRepository extends Repository<Frame> {
}
