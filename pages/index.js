import Toolbar from "../components/Toolbar"
import { GiPalmTree } from "react-icons/gi"
import { IoMdSunny } from "react-icons/io"
import { RiLightbulbFlashLine } from "react-icons/ri"
import Prompt from "../components/Prompt"
import Form from "../components/Form"
import { useState } from "react"
import useSaveEmail from "../hooks/useSaveEmail"
import Head from "next/head"

export default function Home() {
	const [formShown, showForm] = useState(false)

	const [state, dispatch, saveEmail] = useSaveEmail()
	const { alertShown, error, saved } = state

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

	function acknowledgeSuccess() {
		dispatch({ type: "acknowledge" })
		showForm(false)
	}

	return (
		<>
			{alertShown && error && error.type !== "client" ? (
				<Prompt {...errorProps} />
			) : null}

			{formShown && !alertShown ? (
				<Prompt
					barModifier={saved ? "success" : "pending"}
					acknowledge={acknowledgeSuccess}
					type={saved ? "single" : ""}
					message1={
						saved
							? ""
							: "Your developer can't take any more projects at the moment."
					}
					message2={
						saved
							? "Thank you! I'll keep you updated"
							: "Let me give you an update."
					}
				>
					<Form {...formProps} />
				</Prompt>
			) : null}
			<Head>
				<title>Justin Salas</title>
				<link
					rel="shortcut icon"
					href="/icons/teaPNG64.png"
					type="image/x-icon"
				/>
			</Head>
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
