import React from 'react'

const Finished = ({ score, shareLink, onReset }) => (
	<div>
		<p className="finished-emoji">🎉🎉🎉</p>
		<p>Congratulations on finishing the quiz!</p>
		{score === 0 && (
			<p>Not even one? Did you try?</p>
		)}
		{(score > 0 && score < 3) && (
			<p>{score}? Hmm, okay I guess</p>
		)}
		{(score >= 3 && score < 6) && (
			<p>{score}? At least you tried.</p>
		)}
		{(score >= 6 && score <= 9) && (
			<p>You did very well getting {score}.</p>
		)}
		{score === 10 && (
			<p>100% — You're basically <a href="https://twitter.com/jeremyburge">Jeremy Burge</a></p>
		)}

		<p><a href="#" onClick={onReset}>Try again</a></p>

		<p><a href={shareLink} target="_blank">Share on Twitter</a></p>
	</div>
)

export default Finished