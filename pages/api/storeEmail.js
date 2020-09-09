import nextConnect from "next-connect"
import initDatabase from "../../middlewares/initDatabase"

const handler = nextConnect()
handler.use(initDatabase)

handler.post(async (req, res) => {
	try {
		const emails = req.db.collection("emails")
		await emails.insertOne(req.body)
		res.status(200).json({
			info: {
				message: "Email saved successfully",
				type: "save",
				from: "db"
			}
		})
	} catch (error) {
		console.log("**** save email ****", error)
		if (error.keyPattern) {
			res.status(400).json({
				error: {
					message: "Email already listed",
					type: "client",
					from: "db"
				}
			})
		}
		res.status(500).json({
			error: {
				message: "Error saving email",
				type: "save",
				from: "db"
			}
		})
	}
})

export default handler
