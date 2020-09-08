import CustomLink from "./CustomLink"
import { FaLeaf } from "react-icons/fa"

export default function Toolbar() {
	return (
		<div className="toolbar">
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__brand">
						<CustomLink href="/">
							<a className="brand">
								justinSalas
								<span className="brand__icon">
									<FaLeaf />
								</span>
							</a>
						</CustomLink>
					</li>
					<li>
						<CustomLink href="/projects">
							<a className="navigation__link">Projects</a>
						</CustomLink>
					</li>
					<li>
						<CustomLink href="/certifications">
							<a className="navigation__link">Certfications</a>
						</CustomLink>
					</li>
					<li>
						<CustomLink href="/finance">
							<a className="navigation__link">Personal Finance</a>
						</CustomLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}
