import { VscLoading } from "react-icons/vsc"
export default function Ecommerce() {
	return (
		<li className="project project--ecommerce">
			<div className="project__title project__title--ecommerce">
				<h2>E-commerce CMS </h2>{" "}
				<span className="project__link">
					<VscLoading className="icon icon--ecommerce" />
				</span>
			</div>

			<p className="project__description">
				Full stack web app for managing online store content
				<br />
				<br />
				UNDER CONSTRUCTION
			</p>
		</li>
	)
}
