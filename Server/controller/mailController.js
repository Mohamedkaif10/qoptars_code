const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const mail= (req, res) => {

    const { name, email,phone, desc} = req.body;
    let config = {
        service : 'gmail',
        auth : {
            user: "mohamedkaif100604@gmail.com",
            pass: "nopxagesvgycgkeu"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : name,
            table : {
                data : [
                    {
                        phone:phone,
                        description: desc,
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : "mohamedkaif100604@gmail.com",
        to : email,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

  
}
module.exports = {
   mail
}