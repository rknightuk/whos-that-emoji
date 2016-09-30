import React from 'react'

const Emoji = ({ emoji, answered, correct }) => (
	<div className="wte-answer">
		<span className={answered ? 'wte-answer-symbol-answered' : 'wte-answer-symbol'}>
			{emoji.symbol}
		</span>
		{answered ? (<p>{correct ? 'Correct!' : 'Incorrect'}, it was {emoji.name}</p>) : (<p>Choose an answer below</p>)}
	</div>
)

export default Emoji