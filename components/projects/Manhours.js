import { DiCss3Full } from "react-icons/di"
import { FaSass } from "react-icons/fa"
import { RiFoldersLine } from "react-icons/ri"
import { GrReactjs } from "react-icons/gr"
import { SiNodeDotJs } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { AiFillLock } from "react-icons/ai"
import { FcMultipleSmartphones } from "react-icons/fc"
import { BiCalendarStar } from "react-icons/bi"
import { SiGoogleanalytics } from "react-icons/si"

export default function Manhours() {
	return (
		<li className="project project--manhours">
			<div className="project__title project__title--manhours">
				<h2>Manhours Management System</h2>{" "}
				<span className="project__link">
					<AiFillLock className="icon icon--manhours" />
				</span>
			</div>

			<p className="project__description">
				Full stack web application for distributed manpower tracking and central
				analytics
			</p>
			<section className="project__features">
				<h3>key features</h3>
				<ul>
					<li>
						<FcMultipleSmartphones className="icon" />
						Team member remotely enters own daily accomplishment
					</li>
					<li>
						<BiCalendarStar className="icon" />
						View daily, weekly or monthly team accomplishment
					</li>
					<li>
						<SiGoogleanalytics className="icon" />
						View monthly or annual analytics of consolidated data per project
					</li>
				</ul>
			</section>
			<section className="project__technologies">
				<h3>key technologies</h3>
				<ul>
					<li>
						<GrReactjs className="icon icon--react" /> React
					</li>
					<li>
						<SiNodeDotJs className="icon icon--node" /> Express
					</li>
					<li>
						<SiMongodb className="icon icon--mongodb" /> MongoDB Atlas
					</li>
					<li>
						<SiMongodb className="icon icon--mongodb" /> Mongodb Aggregation
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
