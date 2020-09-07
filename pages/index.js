import Toolbar from "../components/toolbar"
import { GiPalmTree } from "react-icons/gi"
import { WiDaySunnyOvercast } from "react-icons/wi"
import { RiLightbulbFlashLine } from "react-icons/ri"

export default function Home() {
	return (
		<>
			<Toolbar />
			<main className="main">
				<h1 className="greet">
					Hi
					<WiDaySunnyOvercast className="greet__sun" /> I'm a web developer
					based in the Philippines
					<GiPalmTree className="greet__tree" />
				</h1>
				<button className="main__action button--success">
					<RiLightbulbFlashLine className="main__action-icon" /> Let's make your
					ideas happen
				</button>
			</main>
			<footer className="footer">Footer</footer>
		</>
	)
}
