"use server";

import nodeMailer from 'nodemailer';
import { FormFields } from "@/modules/home/sections/contact/FormSchema";

const sendEmail = async (formData: FormFields) => {

  const { name, email, company, message } = formData;

  const MAILER_SERVICE = process.env.MAILER_SERVICE ?? '';
  const MAILER_EMAIL = process.env.MAILER_EMAIL ?? '';
  const MAILER_TO = process.env.MAILER_TO ?? '';
  const MAILER_SECRET_KEY = process.env.MAILER_SECRET_KEY ?? '';
  
  const transporter = nodeMailer.createTransport({
    service: MAILER_SERVICE,
    auth: {
      user: MAILER_EMAIL,
      pass: MAILER_SECRET_KEY,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: MAILER_TO,
    subject: `Message from ${company}, from your portfolio website`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 'success' };
  } catch (error) {
    console.error('There was an error:', error);
    return { status: 'error' };
  }
};

export default sendEmail;
