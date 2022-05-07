import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '49c66915e92978',
    pass: '4705b7c3908631'
  }
})
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: ' Equipe feedget <oi@feedget.com',
      to: 'alexandre <alexa nd.juliao@gmail.com',
      subject,
      html: body
    })
  }
}
