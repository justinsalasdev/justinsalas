import Toolbar from "../components/Toolbar"
import { GiPalmTree } from "react-icons/gi"
import { IoMdSunny } from "react-icons/io"
import { RiLightbulbFlashLine } from "react-icons/ri"
import Prompt from "../components/Prompt"
import Form from "../components/Form"
import { useState } from "react"
import useSaveEmail from "../hooks/useSaveEmail"

export default function Home() {
	const [formShown, showForm] = useState(false)

	const [state, dispatch, saveEmail] = useSaveEmail()
	const { alertShown, error } = state

	const errorProps = {
		type: "single",
		message1: error ? error.message : "",
		acknowledge: () => dispatch({ type: "acknowledge" })
	}

	const formProps = {
		showForm,
		saveEmail,
		state,
		dispatch
	}

	return (
		<>
			{alertShown && error && error.type !== "client" ? (
				<Prompt {...errorProps} />
			) : null}

			{formShown && !alertShown ? (
				<Prompt
					message1={
						"Your developer can't take any more projects at the moment."
					}
					message2={"Let me give you an update."}
				>
					<Form {...formProps} />
				</Prompt>
			) : null}
			<Toolbar />
			<main className="main">
				<h1 className="greet">
					Hi
					<IoMdSunny className="greet__sun" /> I'm a web developer based in the
					Philippines
					<GiPalmTree className="greet__tree" />
				</h1>
				<button
					className="main__action button--success"
					type="button"
					onClick={() => showForm(true)}
				>
					<RiLightbulbFlashLine className="main__action-icon" /> Let's make your
					ideas happen
				</button>
			</main>
			<footer className="footer">
				<p>&copy; Copyright 2020 justinsalas.cc All rights reserved</p>
			</footer>
		</>
	)
}
