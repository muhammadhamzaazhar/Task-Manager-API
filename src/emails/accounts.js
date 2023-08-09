const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (email, name) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.APP_PASSWORD
        }
    });

    const info = await transporter.sendMail({
        from: {
            name: 'Muhammad Hamza Azhar',
            address: process.env.USER // sender address
        },
        to: email,
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    });
}

const sendCancellationEmail = async (email, name) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.APP_PASSWORD
        }
    });
    const info = await transporter.sendMail({
        from: {
            name: 'Muhammad Hamza Azhar',
            address: process.env.USER // sender address
        },
        to: email,
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}