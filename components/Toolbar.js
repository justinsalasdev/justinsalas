import CustomLink from "./CustomLink"

export default function Toolbar() {
	return (
		<div className="toolbar">
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__brand">
						<CustomLink href="/">
							<a className="brand">
								<div>
									<img
										src="/icons/teaSVG.svg"
										alt="to homepage"
										className="brand__logo"
									/>
								</div>
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
