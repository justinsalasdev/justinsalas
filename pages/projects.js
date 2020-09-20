import Head from "next/head"
import Toolbar from "../components/Toolbar"
import BurgerBuilder from "../components/projects/BurgerBuilder"
import Natours from "../components/projects/Natours"
import Nexter from "../components/projects/Nexter"
import Trillo from "../components/projects/Trillo"
import Tindog from "../components/projects/Tindog"
import Manhours from "../components/projects/Manhours"
import Event from "../components/projects/Event"
import Ecommerce from "../components/projects/Ecommerce"

export default function About() {
	return (
		<>
			<Head>
				<title>justinsalas | Projects</title>
				<link
					rel="shortcut icon"
					href="/icons/leafPNG64.png"
					type="image/x-icon"
				/>
			</Head>
			<Toolbar />
			<main className="main main--projects">
				<ul className="projects">
					<Ecommerce />
					<Event />
					<Manhours />
					<BurgerBuilder />
					<Natours />
					<Nexter />
					<Trillo />
					<Tindog />
				</ul>
			</main>
		</>
	)
}
