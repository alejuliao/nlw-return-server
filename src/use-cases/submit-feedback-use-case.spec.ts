import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()
const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
  // { create: async () => {} },
  // { sendMail: async () => {} }
)
describe('submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'comment example',
        screenshot: 'data:image/png;base64comment example'
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toBeCalled()
    expect(sendMailSpy).toBeCalled()
  })
  it('should not be able to submit a feedback widhtou type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'comment example',
        screenshot: 'data:image/png;base64comment example'
      })
    ).rejects.toThrow()
  })
  it('should not be able to submit a feedback widhtou comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'bug',
        comment: '',
        screenshot: 'data:image/png;base64comment example'
      })
    ).rejects.toThrow()
  })
  it('should not be able to submit a feedback widhtou valid image', async () => {
    await expect(
      submitFeedback.execute({
        type: 'bug',
        comment: 'comment test',
        screenshot: 'sads'
      })
    ).rejects.toThrow()
  })
})
