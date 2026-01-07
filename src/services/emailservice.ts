import emailjs from '@emailjs/browser';
export interface ContactParams {
  name:string;
  email:string;
  subject:string;
  message:string;
}

export const sendEmailMessage = async (data:ContactParams) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
        name:data.name,
        email:data.email,
        subject:data.subject,
        message:data.message
    }

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}