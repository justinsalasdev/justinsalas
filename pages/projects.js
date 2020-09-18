import Head from "next/head"
import Toolbar from "../components/Toolbar"
import { ImHtmlFive } from "react-icons/im"
import { DiCss3Full } from "react-icons/di"
import { GoLinkExternal } from "react-icons/go"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"

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
					<li className="project project--natours">
						<div className="project__title project__title--natours">
							<h2>Natours</h2>{" "}
							<a
								className="project__link"
								target="_blank"
								href="http://natours.justinsalas.cc"
							>
								<GoLinkExternal className="icon icon--link" />
							</a>
						</div>

						<p className="project__description">A demo landing page project</p>
						<section className="project__technologies">
							<h3>key technologies</h3>
							<ul>
								<li>
									<ImHtmlFive className="icon icon--html" /> HTML5
								</li>
								<li>
									<DiCss3Full className="icon icon--css" /> CSS3
								</li>
								<li>
									<FaSass className="icon icon--sass" /> SASS
								</li>
								<li>
									<RiFoldersLine className="icon icon--bem" /> BEM Methodology
								</li>
							</ul>
						</section>
					</li>

					<li className="project project--nexter">
						<div className="project__title project__title--nexter">
							<h2>Nexter</h2>{" "}
							<a
								className="project__link"
								target="_blank"
								href="http://nexter.justinsalas.cc"
							>
								<GoLinkExternal className="icon icon--link" />
							</a>
						</div>

						<p className="project__description">A demo landing page project</p>
						<section className="project__technologies">
							<h3>key technologies</h3>
							<ul>
								<li>
									<ImHtmlFive className="icon icon--html" /> HTML5
								</li>
								<li>
									<DiCss3Full className="icon icon--css" /> CSS3
								</li>
								<li>
									<FaSass className="icon icon--sass" /> SASS
								</li>
								<li>
									<RiFoldersLine className="icon icon--bem" /> BEM Methodology
								</li>
							</ul>
						</section>
					</li>

					<li className="project project--trillo">
						<div className="project__title project__title--trillo">
							<h2>Trillo</h2>{" "}
							<a
								className="project__link"
								target="_blank"
								href="http://trillo.justinsalas.cc"
							>
								<GoLinkExternal className="icon icon--link" />
							</a>
						</div>

						<p className="project__description">A demo landing page project</p>
						<section className="project__technologies">
							<h3>key technologies</h3>
							<ul>
								<li>
									<ImHtmlFive className="icon icon--html" /> HTML5
								</li>
								<li>
									<DiCss3Full className="icon icon--css" /> CSS3
								</li>
								<li>
									<FaSass className="icon icon--sass" /> SASS
								</li>
								<li>
									<RiFoldersLine className="icon icon--bem" /> BEM Methodology
								</li>
							</ul>
						</section>
					</li>

					<li className="project project--tindog">
						<div className="project__title ">
							<h2>Tindog </h2>{" "}
							<a
								className="project__link"
								target="_blank"
								href="http://tindog.justinsalas.cc"
							>
								<GoLinkExternal className="icon icon--link" />
							</a>
						</div>

						<p className="project__description">A demo landing page project</p>
						<section className="project__technologies">
							<h3>key technologies</h3>
							<ul>
								<li>
									<ImHtmlFive className="icon icon--html" /> HTML5
								</li>
								<li>
									<DiCss3Full className="icon icon--css" /> CSS3
								</li>
							</ul>
						</section>
					</li>
				</ul>
			</main>
		</>
	)
}
