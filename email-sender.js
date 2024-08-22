const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'shaymalassoued99@gmail.com',  
        pass: '*******'  
    }
});

// Options de l'email
let mailOptions = {
    from: 'shaymalassoued99@gmail.com',  
    to: 'ineslassoied@gmail.com',  
    subject: 'Test Email avec Nodemailer',  
    text: 'Ceci est un e-mail envoyé avec Nodemailer!'  
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email envoyé: ' + info.response);
});
