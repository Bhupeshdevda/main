const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "viva.hudson20@ethereal.emailL",
            pass: "EcqGWN2A7J8JjFndw2",
        },
    });
    let info = await transporter.sendMail({
        from: '"Mayank D" <kavya.bhupeshdevda@gmail.com>', // sender address
        to: "kavya.bhupeshdevda1@gmail.com", // list of receivers
        subject: "Hello bro", // Subject line
        text: "kya chl rha he ", // plain text body
        html: "<b>Full stack to nhi</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;