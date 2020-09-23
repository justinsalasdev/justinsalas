import { DiCss3Full } from "react-icons/di"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"
import { ImHtmlFive } from "react-icons/im"
import { SiNodeDotJs } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { AiFillLock } from "react-icons/ai"
import { AiFillDatabase } from "react-icons/ai"
import { FaTable } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { FaFileCsv } from "react-icons/fa"

export default function Event() {
	return (
		<li className="project project--event">
			<div className="project__title project__title--event">
				<h2>Event Log Analyzer</h2>{" "}
				<span className="project__link">
					<AiFillLock className="icon icon--event" />
				</span>
			</div>

			<p className="project__description">
				Full stack web applet that analyzes field event log and determines
				defective field devices
			</p>
			<section className="project__features">
				<h3>key features</h3>
				<ul>
					<li>
						<FaFileCsv className="icon" />
						Accepts CSV log of up to 100 thousand records
					</li>
					<li>
						<FaTable className="icon" />
						Outputs list of defective field devices
					</li>
					<li>
						<AiFillDatabase className="icon" />
						Stores historical records of defective devices
					</li>
				</ul>
			</section>
			<section className="project__technologies">
				<h3>key technologies</h3>
				<ul>
					<li>
						<ImHtmlFive className="icon icon--html" /> HTML5
					</li>
					<li>
						<SiJavascript className="icon icon--javascript" /> Javascript
					</li>
					<li>
						<SiNodeDotJs className="icon icon--node" /> Express
					</li>
					<li>
						<SiMongodb className="icon icon--mongodb" /> MongoDB Atlas
					</li>
					<li>
						<SiMongodb className="icon icon--mongodb" /> MongoDB Aggregation
						Framework
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
