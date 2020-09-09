import React from "react"

export default function Spinner({ otherClass }) {
	return (
		<div className={`spinner ${otherClass}`}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
