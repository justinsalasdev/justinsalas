import { useReducer } from "react"

const initialState = {
	saving: false,
	saved: false,
	error: null,
	alertShown: false
}

function reducer(state, action) {
	switch (action.type) {
		case "start":
			return { ...initialState, saving: true }
		case "fail":
			return {
				...state,
				saving: false,
				error: action.payload
			}
		case "success":
			return {
				...state,
				saving: false,
				saved: true,
				error: null
			}
		case "alert": {
			return { ...state, alertShown: true }
		}
		case "acknowledge":
			return { ...state, alertShown: false, error: null, saved: false }

		default:
			return state
	}
}

export default function useSaveEmail() {
	const [state, dispatch] = useReducer(reducer, initialState)

	async function saveEmail(formData) {
		dispatch({ type: "start" })
		try {
			const response = await fetch(`/api/storeEmail`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					...formData,
					token: process.env.NEXT_PUBLIC_TOKEN
				})
			})

			const data = await response.json()
			if (data.error && data.error.type === "client") {
				dispatch({ type: "fail", payload: data.error })
			} else if (data.info) {
				dispatch({ type: "success" })
			} else {
				throw new Error()
			}
		} catch (error) {
			const customError = {
				type: "crash",
				message: "Something went wrong"
			}
			dispatch({ type: "fail", payload: customError })
			dispatch({ type: "alert" })
		}
	}
	return [state, dispatch, saveEmail]
}
