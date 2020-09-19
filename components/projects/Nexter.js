import { ImHtmlFive } from "react-icons/im"
import { DiCss3Full } from "react-icons/di"
import { GoLinkExternal } from "react-icons/go"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"
export default function Nexter() {
	return (
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

			<p className="project__description">A demo landing page</p>
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
	)
}
