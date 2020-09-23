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
							: `Your developer can't take any more projects at the moment.`
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
				{/* generic meta tag*/}
				<title>justinsalas | Home</title>
				<link
					rel="shortcut icon"
					href="/icons/leafPNG64.png"
					type="image/x-icon"
				/>
				<meta
					name="description"
					content="A web developer based in the Philippines"
				/>
				<meta name="robots" content="index, nofollow" />
				<meta name="author" content="Justin Salas" />

				{/* facebook open graph*/}
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Justin Salas" />
				<meta property="og:url" content="https://justinsalas.cc" />
				<meta
					property="og:image"
					content="https://justinsalas.cc/icons/leafPNG512.png"
				/>
				<meta property="profile:first_name" content="Justin" />
				<meta property="profile:last_name" content="Salas" />

				{/* twitter cards*/}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="justinsalas.cc" />
				<meta name="twitter:title" content="Justin Salas" />
				<meta
					name="twitter:description"
					content="A web developer based in the Philippines"
				/>
			</Head>
			<Toolbar />
			<main className="main main--home">
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
