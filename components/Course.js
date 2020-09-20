import { GoLinkExternal } from "react-icons/go"
const links = {
	reactnative: "https://reactnative.dev/",
	graphql: "https://graphql.org/",
	mongodb:
		"https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
	data: "https://www.codecademy.com/learn/paths/data-science",
	react: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
	node2: "https://www.udemy.com/course/nodejs-the-complete-guide/",
	node: "https://www.udemy.com/course/nodejs-master-class/",
	ajs: "https://www.udemy.com/course/advanced-javascript-concepts/",
	weird: "https://www.udemy.com/course/understand-javascript/",
	freecode: "https://www.freecodecamp.org/",
	javascript:
		"https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
	acss: "https://www.udemy.com/course/advanced-css-and-sass/",
	css:
		"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
	freecode2: "https://www.freecodecamp.org/",
	colt: "https://www.udemy.com/course/the-web-developer-bootcamp/",
	angela: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
}
export default function Course({ title, instructor, id }) {
	return (
		<li className={`completed__course--${id}`}>
			<div className={`completed__logo--${id}`}></div>
			<a className={`completed__title--${id}`}>{title}</a>
			<span className={`completed__instructor--${id}`}>by {instructor}</span>
			<a className={`completed__link`} href={links[id]} target="_blank">
				<GoLinkExternal className={`icon icon--${id}`} />
			</a>
		</li>
	)
}
