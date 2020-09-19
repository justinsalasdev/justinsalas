import { ImHtmlFive } from "react-icons/im"
import { DiCss3Full } from "react-icons/di"
import { GoLinkExternal } from "react-icons/go"
export default function Tindog() {
	return (
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
				</ul>
			</section>
		</li>
	)
}
