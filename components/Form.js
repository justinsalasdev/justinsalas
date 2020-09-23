import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as Yup from "yup"
import FormInput from "./FormInput"
import Spinner from "./Spinner"

const schema = Yup.object({
	email: Yup.string()
		.email("is invalid")
		.required("is required")
		.max(64, "must not be longer than 20 characters")
})

export default function Form({ showForm, saveEmail, state, dispatch }) {
	const { error, saving } = state
	const methods = useForm({
		mode: "all",
		resolver: yupResolver(schema)
	})

	const { handleSubmit, errors: formErrors } = methods

	function handleCancel() {
		dispatch({ type: "acknowledge" })
		showForm(false)
	}

	//saveEmail automatically receives form data as argument
	return (
		<div className="form__container prompt__component">
			{error && error.type === "client" ? (
				<p className="form__toolkit">{error.message}</p>
			) : null}

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(saveEmail)} className={`form`}>
					<FormInput type="text" id="email">
						Email
					</FormInput>

					<div className="form__actions">
						<button
							type="button"
							className="button--danger form__action"
							onClick={handleCancel}
						>
							Cancel
						</button>
						{saving ? (
							<div className="form__spinner">
								<Spinner otherClass="spinner--link" />
							</div>
						) : (
							<button
								disabled={Object.keys(formErrors).length > 0}
								type="submit"
								className="button--success form__action"
							>
								Submit
							</button>
						)}
					</div>
				</form>
			</FormProvider>
		</div>
	)
}
