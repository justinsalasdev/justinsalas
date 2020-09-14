import { MongoClient } from "mongodb"
import nextConnect from "next-connect"

const URI = process.env.MONGO_URL
const dbName = process.env.MONGO_DBNAME

const client = new MongoClient(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

async function initDB(req, res, next) {
	try {
		if (!client.isConnected()) await client.connect()
		req.db = client.db(dbName)
		return next()
	} catch (error) {
		res.status(500).json({
			message: "Error initializing db",
			type: "connect",
			from: "db"
		})
	}
}

//ensure that collection contains at least one document
async function createIndex(req, res, next) {
	try {
		const emails = req.db.collection("emails")
		if (await emails.indexExists("email")) {
			next()
		} else {
			await emails.createIndex({ email: 1 }, { unique: true, name: "email" })
			next()
		}
	} catch (error) {
		res.status(500).json({
			message: "Error creating index",
			type: "connect",
			from: "db"
		})
	}
}

const initDatabase = nextConnect()
initDatabase.use(initDB).use(createIndex)

export default initDatabase
