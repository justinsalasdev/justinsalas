import CustomLink from "./CustomLink"
import { RiHome2Line } from "react-icons/ri"

export default function Toolbar() {
	return (
		<div className="toolbar">
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__brand">
						<CustomLink href="/">
							<a className="navigation__home">
								<RiHome2Line className="navigation__icon" />
							</a>
						</CustomLink>
					</li>
					<li>
						<CustomLink href="/projects">
							<a className="navigation__link">Projects</a>
						</CustomLink>
					</li>
					<li>
						<CustomLink href="/credentials">
							<a className="navigation__link">Credentials</a>
						</CustomLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}
