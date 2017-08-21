var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});

exports.contact = function (req, res) {
    res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' })
};

app.post('/contact', function (req, res) {
    var mailOpts, smtpTrans;
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: "varun.varu11@gmail.com",
            pass: "9844254365"
        }
    });
    //Mail options
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
        to: 'varun.varu11@gmail.com',
        subject: 'Website contact form',
        text: req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
        }
        //Yay!! Email sent
        else {
            res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
        }
    });
});


module.exports = router;
