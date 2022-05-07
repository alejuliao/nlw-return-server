import { prisma } from '../../prisma'
import {
  FeedbacksRepository,
  FeedbackCreateData
} from '../feedbacks-repository'

export class PrismFeeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
