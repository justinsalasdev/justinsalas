import nextConnect from "next-connect"
import initDatabase from "../../middlewares/initDatabase"

const handler = nextConnect()
handler.use(initDatabase)

handler.get(async (req, res) => {
	try {
		const emails = await req.db.collection("emails")
		const result = await emails.insertOne({ name: "email@email.com" })
		res.json(result)
	} catch (error) {
		console.log(error)
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
