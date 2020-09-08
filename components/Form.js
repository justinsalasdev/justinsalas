import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as Yup from "yup"
import FormInput from "./FormInput"

const schema = Yup.object({
	email: Yup.string()
		.email("is invalid")
		.required("is required")
		.max(64, "must not be longer than 20 characters")
})

export default function Form({ showForm }) {
	const methods = useForm({
		mode: "all",
		resolver: yupResolver(schema)
	})

	const { handleSubmit, errors: formErrors } = methods

	function onSubmit() {
		console.log("Submitting")
	}

	return (
		<div className="form__container prompt__component">
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)} className={`form`}>
					<FormInput type="text" id="email">
						Email
					</FormInput>

					<div className="form__actions">
						<button
							type="button"
							className="button--danger form__action"
							onClick={() => showForm(false)}
						>
							Cancel
						</button>
						<button
							disabled={Object.keys(formErrors).length > 0}
							type="submit"
							className="button--success form__action"
						>
							Submit
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}
