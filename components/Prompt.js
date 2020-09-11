import React from "react"

export default function Prompt(props) {
	const {
		type,
		message1,
		message2,
		acknowledge,
		proceed,
		cancel,
		proceedName,
		cancelName,
		children,
		barModifier
	} = props

	const renderAction = type => {
		if (type === "dual") {
			return (
				<>
					<button
						type="button"
						className="button--danger prompt__button"
						onClick={cancel}
					>
						{cancelName}
					</button>
					<button
						type="button"
						className="button--success prompt__button"
						onClick={proceed}
					>
						{proceedName}
					</button>
				</>
			)
		} else if (type === "single") {
			return (
				<button
					type="button"
					className="button--success prompt__button"
					onClick={acknowledge}
				>
					OK
				</button>
			)
		} else {
			return null
		}
	}

	return (
		<>
			<div className="prompt__backdrop"></div>
			<div className="prompt__window">
				<div className={`prompt__bar prompt__bar--${barModifier}`}></div>
				{message1 && <p className="prompt__message">{message1}</p>}
				{message2 && <p className="prompt__message2">{message2}</p>}
				{type === "single" ? null : children}
				{type && <div className="prompt__actions">{renderAction(type)}</div>}
			</div>
		</>
	)
}
