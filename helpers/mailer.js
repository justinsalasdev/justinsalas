import nodemailer from "nodemailer"
import emailTemplate from "../constants/emailTemplate"

export default async function mailer(recipient) {
	let transporter = nodemailer.createTransport({
		host: "webhost.dynadot.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	})

	let info = await transporter.sendMail({
		from: `"Justin Salas" dev@justinsalas.cc`,
		to: `${recipient}, techmechanicservice@gmail.com`, // list of receivers
		subject: "A warm greeting from justinsalas.cc", // Subject line
		html: emailTemplate
	})

	console.log("Message sent: %s", info.messageId)
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}
