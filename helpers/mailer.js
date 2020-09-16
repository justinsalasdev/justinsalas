import nodemailer from "nodemailer"
import emailTemplate from "../constants/emailTemplate"

export default async function mailer(email) {
	let transporter = nodemailer.createTransport({
		host: "webhost.dynadot.com",
		port: 587,
		secure: false,
		auth: {
			user: "dev@justinsalas.cc",
			pass: "devmail"
		}
	})

	let info = await transporter.sendMail({
		from: `"Justin Salas" dev@justinsalas.cc`,
		to: "techmechanicservice@gmail.com", // list of receivers
		subject: "TEST EMAIL FROM NODE", // Subject line
		html: emailTemplate
	})

	console.log("Message sent: %s", info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
