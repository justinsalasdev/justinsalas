import { DiCss3Full } from "react-icons/di"
import { GoLinkExternal } from "react-icons/go"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"
import { SiFirebase } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import { SiRedux } from "react-icons/si"

export default function BurgerBuilder() {
	return (
		<li className="project project--burger">
			<div className="project__title project__title--burger">
				<h2>Burger Builder</h2>{" "}
				<a
					className="project__link"
					target="_blank"
					href="http://burger.justinsalas.cc"
				>
					<GoLinkExternal className="icon icon--burger" />
				</a>
			</div>

			<p className="project__description">A demo full stack web application</p>
			<section className="project__technologies">
				<h3>key technologies</h3>
				<ul>
					<li>
						<GrReactjs className="icon icon--react" /> React
					</li>
					<li>
						<SiRedux className="icon icon--redux" /> Redux
					</li>
					<li>
						<SiFirebase className="icon icon--firebase" /> Firebase
						Authentication
					</li>
					<li>
						<SiFirebase className="icon icon--firebase" /> Firebase DB
					</li>
					<li>
						<DiCss3Full className="icon icon--css" /> CSS
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
	)
}
