import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';

class SendMailService {
  private transporter: Transporter;

  constructor() {
    nodemailer.createTestAccount().then((account) => {
      this.transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });
    });
  }

  async execute(
    to: string,
    subject: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    variables: object,
    path: string
  ): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString('utf8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    const message = await this.transporter.sendMail({
      to,
      subject,
      html,
      from: 'NPS <noreply@nps.com>'
    });

    // eslint-disable-next-line no-console
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
