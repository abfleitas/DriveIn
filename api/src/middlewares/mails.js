const nodemailer = require("nodemailer");

const mails = async (content, to, subject) => {

 
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "driveinalquileres@gmail.com", 
      pass: "eauhsbidqgvtowkc",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"DriveIn" <driveinalquileres@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: "content", // plain text body
    html: content, // html body
  });


};

module.exports = {
  mails,
};
