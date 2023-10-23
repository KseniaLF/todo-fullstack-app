import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ISendEmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (data: ISendEmailData) => {
  const email = {
    ...data,
    from: 'llfllf9391@gmail.com'
  };

  await sgMail.send(email);
  return true;
};
