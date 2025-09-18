import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendThankYouEmail = async (email, name, messageContent) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting us!',
            text: `Hi ${name},\n\nWe have received your message:\n"${messageContent}"\n\nThank you for reaching out! We will get back to you shortly.\n\nBest Regards,\nSahil Rawat`
        };

        await transporter.sendMail(mailOptions);
        console.log(`Thank you email sent to ${email}`);
    } catch (error) {
        console.error('Failed to send email:', error.message);
        throw error;
    }
};

export default sendThankYouEmail;
