import Link from "next/link"
import { FaLeaf } from "react-icons/fa"

export default function Toolbar() {
	return (
		<div className="toolbar">
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__brand">
						<Link href="/">
							<a className="brand">
								justinSalas
								<span className="brand__icon">
									<FaLeaf />
								</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a className="navigation__link">Projects</a>
						</Link>
					</li>
					<li>
						<Link href="/certifications">
							<a className="navigation__link">Certfications</a>
						</Link>
					</li>
					<li>
						<Link href="/finance">
							<a className="navigation__link">Personal Finance</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
