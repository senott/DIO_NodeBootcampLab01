const nodemailer = require('nodemailer')
const mailConfig = require(`../../config/mail`)

// mailtrap.io
export default nodemailer.createTransport(mailConfig)