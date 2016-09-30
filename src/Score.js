import React from 'react'

const Score = ({ score, total }) => (
	<div className="wte-score">
		Your score: <span className="wte-score-amount">{score}/{total}</span>
	</div>
)

export default Score