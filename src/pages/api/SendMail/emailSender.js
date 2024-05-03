const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'zarakkhan1031@gmail.com',  
        pass: 'kdtn aphj vlha taso'   
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'zarakkhan1031@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
        } else {
            console.log('Email sent successfully!');
        }
    });
};

module.exports = sendEmail;
