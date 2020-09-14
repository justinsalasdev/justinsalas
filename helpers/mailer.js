import nodemailer from "nodemailer"
import emailTemplate from "../constants/emailTemplate"

// async..await is not allowed in global scope, must use a wrapper
export default async function mailer() {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.sendgrid.net",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: "apikey", // generated ethereal user
			pass:
				"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" // generated ethereal password
		}
	})

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "dev@justinsalas.cc", // sender address
		to: "test@example.com, baz@example.com, techmechanicservice@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		html: emailTemplate
	})

	console.log("Message sent: %s", info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
