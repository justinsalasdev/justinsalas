import * as Yup from "yup"

async function validator(req, res, next) {
	const shape = {
		email: Yup.string().email()
	}

	try {
		if (!req.body) {
			res.status(400).json({
				error: {
					message: "Your request contains no data",
					type: "validate",
					from: "validator"
				}
			})
		}

		if (req.body && req.body.token !== process.env.NEXT_PUBLIC_TOKEN) {
			res.status(401).json({
				error: {
					message: "Your request came from an unauthorized client",
					type: "validate",
					from: "validator"
				}
			})
		} else {
			const schema = Yup.object().shape(shape)
			const validData = await schema.validate(req.body)
			delete validData.token
			req.validBody = validData
			return next()
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			error: {
				message: "Something wen't wrong",
				type: "validate",
				from: "validator"
			}
		})
	}
}

export default validator
