import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export class EmailSend {
       private transporter;
     
       constructor() {
         this.transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
             user: process.env.EMAIL, 
             pass: process.env.PASSWORD, 
           },
         });
       }
     
       async sendEmail(from:string,to: string, subject: string, text: string, html?: string): Promise<void> {
         try {
           const mailOptions = {
             from,
             to,
             subject,
             text,
             html,
           };
     
           const info = await this.transporter.sendMail(mailOptions);
           console.log("📧 Email sent: " + info.response);
         } catch (error) {
           console.error("❌ Error sending email:", error);
           throw error;
         }
       }
     }
