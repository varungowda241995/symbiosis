var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "localhost",
    service:"Gmail",
    secure: true,
    auth: {
        user: "varun.varu11@gmail.com",
        pass: "9844254365",
    }
});

var mailOptions = {
    from: "varun@symbiosisnetwork.com",
    to: " varun.varu11@gmail.com",
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});