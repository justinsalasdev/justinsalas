import { MongoClient } from "mongodb"
import nextConnect from "next-connect"

const dbName = "justinsalas"
const URI = `mongodb://127.0.0.1:27017/${dbName}compressors=zlib&gssapiServiceName=mongodb`

const client = new MongoClient(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

async function database(req, res, next) {
	try {
		if (!client.isConnected()) await client.connect()
		req.db = client.db(dbName)
		return next()
	} catch {
		res.status(500).json({
			message: "Something went wrong",
			type: "connect",
			from: "db"
		})
	}
}

const initDatabase = nextConnect()
initDatabase.use(database)

export default initDatabase
