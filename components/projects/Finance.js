import { DiCss3Full } from "react-icons/di"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"
import { SiNextDotJs } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { GoLinkExternal } from "react-icons/go"
import { SiMinutemailer } from "react-icons/si"
import { ImUserTie } from "react-icons/im"

export default function Finance() {
	return (
		<li className="project project--finance">
			<div className="project__title project__title--finance">
				<h2>Professional Blog</h2>{" "}
				<a
					className="project__link"
					target="_blank"
					href="https://save.justinsalas.cc"
				>
					<GoLinkExternal className="icon icon--link" />
				</a>
			</div>

			<p className="project__description">
				Full stack web app for professional engagement
			</p>
			<section className="project__features">
				<h3>key features</h3>
				<ul>
					<li>
						<SiMinutemailer className="icon" />
						Automated mail sending
					</li>
					<li>
						<ImUserTie className="icon" />
						Client info management
					</li>
				</ul>
			</section>

			<section className="project__technologies">
				<h3>key technologies</h3>
				<ul>
					<li>
						<SiNextDotJs className="icon" /> Next JS
					</li>

					<li>
						<SiMongodb className="icon icon--mongodb" /> MongoDB Atlas
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
