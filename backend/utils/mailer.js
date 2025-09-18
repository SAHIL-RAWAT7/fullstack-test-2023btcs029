import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send thank-you / confirmation email to the user
 */
const sendThankYouEmail = async (email, name, messageContent) => {
  try {
    const mailOptions = {
      from: `"VisionX Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your message - VisionX',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background: #111; color: #fff; padding: 20px; text-align: center; font-size: 22px; font-weight: bold;">
              VISION<span style="color: #666;">X</span>
            </div>
            
            <!-- Body -->
            <div style="padding: 30px; color: #333;">
              <h2 style="margin-top: 0; color: #111;">Hello ${name},</h2>
              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to <b>VisionX</b>. We’ve successfully received your message:
              </p>
              <blockquote style="margin: 15px 0; padding: 12px 18px; background: #f7f7f7; border-left: 4px solid #111; color: #555; font-style: italic;">
                ${messageContent}
              </blockquote>
              <p style="font-size: 15px; line-height: 1.6; color: #555;">
                Our team will get back to you shortly.
              </p>
              
              <div style="margin: 25px 0; text-align: center;">
                <a href="https://your-website.com" 
                   style="background: #111; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 8px;">
                  Visit Website
                </a>
              </div>
              
              <p style="font-size: 14px; color: #999; text-align: center;">
                This is an automated message, please do not reply directly.
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 13px; color: #666;">
              &copy; ${new Date().getFullYear()} VisionX. All rights reserved.
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Thank you email sent to ${email}`);
  } catch (error) {
    console.error('Failed to send email:', error.message);
    throw error;
  }
};

export default sendThankYouEmail;
