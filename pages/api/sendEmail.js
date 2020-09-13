import nodemailer from "nodemailer"
import template from "../../constants/emailTemplate"

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// ***let testAccount = await nodemailer.createTestAccount()

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "hardy33@ethereal.email",
			pass: "tDb18zcTpKGjg1uUGQ"
		}
	})

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@email.com>', // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Hello from node app", // Subject line
		// text: "Hello world?", // plain text body
		html: template // html body
	})

	console.log("Message sent: %s", info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error)

export default async function handler(req, res) {
	await main()
	res.send("email sent")
}
