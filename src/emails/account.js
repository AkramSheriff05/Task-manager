const nodemailer = require('nodemailer');
// const dotenv=require('dotenv')
// dotenv.config()

const luck=process.env.PORTAL

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akramsheriff05042000@gmail.com',
    pass: luck
  }
})

const welcomemail =(email,name)=> {
    transporter.sendMail({
  from: 'akramsheriff05042000@gmail.com',
  to: email,
  subject: 'Thanks for joining in',
  text: `welcome to app ${name} monitore your Tasks using Task-manager app
        from 
        Akram sheriff(developer) `
    })
}

const cancelmail =(email,name)=> {
  transporter.sendMail({
from: 'akramsheriff05042000@gmail.com',
to: email,
subject: 'Task manager App cancelation feedback....!',
text: ` Hi ${name} 
Can you share your feedback for leaving our App
from 
      Akram sheriff(developer) `
  })
}

module.exports={
    welcomemail,
    cancelmail
}

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

