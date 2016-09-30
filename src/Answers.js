import React from 'react'

const Answers = ({ answers, onAnswerSelect }) => (
	<ul className="wte-choices">
		{answers.map((answer) => (
			<li className="wte-choice" onClick={() => onAnswerSelect(answer.correct)}>{answer.name}</li>
		))}
	</ul>
)

export default Answers