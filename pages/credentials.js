import Head from "next/head"
import Course from "../components/Course"
import Toolbar from "../components/Toolbar"

const courses = [
	{
		id: "mongodb",
		title: "MongoDB Developers' Guide",
		instructor: "Academind"
	},

	{ id: "data", title: "Data Science", instructor: "Codecademy" },
	{ id: "react", title: "Complete ReactJS", instructor: "Academind" },
	{ id: "node2", title: "Complete NodeJS", instructor: "Academind" },
	{ id: "node", title: "Complete NodeJS", instructor: "Mosh Hamedani" },
	{ id: "ajs", title: "Advance Javascript", instructor: "Andrei Neagoie" },
	{ id: "weird", title: "Advance Javascript", instructor: "Anthony Alicea" },
	{
		id: "freecode",
		title: "Algorithms and Data Structures",
		instructor: "freeCodeCamp"
	},
	{ id: "javascript", title: "Complete Javascript", instructor: "Academind" },
	{ id: "acss", title: "Advance CSS", instructor: "Jonas Schmedtmann" },
	{ id: "css", title: "Complete CSS", instructor: "Academind" },

	{
		id: "freecode2",
		title: "Responsive Web Design",
		instructor: "freeCodeCamp"
	},
	{ id: "colt", title: "Web Developer Bootcamp", instructor: "Colt Steele" },
	{ id: "angela", title: "Web Developer Bootcamp", instructor: "Angela Yu" }
]

const learning = [
	{ id: "reactnative", title: "React Native", instructor: "Facebook" },
	{ id: "graphql", title: "GraphQL", instructor: "Facebook" }
]

export default function About() {
	return (
		<>
			<Head>
				<title>justinsalas | Credentials</title>
				<link
					rel="shortcut icon"
					href="/icons/leafPNG64.png"
					type="image/x-icon"
				/>
			</Head>
			<Toolbar />
			<main className="main main--credentials">
				<section className="completed">
					<h2 className="completed__heading">Courses Completed</h2>

					<ul className="completed__courses">
						{courses.map(({ title, instructor, id }) => {
							return (
								<Course
									key={id}
									title={title}
									id={id}
									instructor={instructor}
								/>
							)
						})}
					</ul>
				</section>
				<section className="completed">
					<h2 className="completed__heading">currently learning</h2>
					<ul className="completed__courses">
						{learning.map(({ title, instructor, id }) => {
							return (
								<Course
									key={id}
									title={title}
									id={id}
									instructor={instructor}
								/>
							)
						})}
					</ul>
				</section>
				{/* <section className="learning">
					<h1>Currently Learning</h1>
					<ul className="learning__courses">
						<li className="learning__course">React Native</li>
						<li className="learning__course">GraphQL</li>
					</ul>
				</section> */}
			</main>
		</>
	)
}
