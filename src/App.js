import React, { Component } from 'react';
import './App.css';
import { EMOJIS } from './emojis'
import Score from './Score'
import Emoji from './Emoji'
import Answers from './Answers'
import Finished from './Finished'

const QUESTIONS = 10

const INITIAL_STATE = {
	score: 0,
	question: 0,
	answered: false,
	correct: false,
	finished: false,
}

class App extends Component {

	state = INITIAL_STATE

	render() {
		return (
			<div>
				<h1>Who's That Emoji?</h1>
				<Score
					score={this.state.score}
					total={QUESTIONS} 
				/>
				{! this.state.finished && (
					<div>
						<Emoji
							emoji={this.getAnswer()}
							answered={this.state.answered}
							correct={this.state.correct}
						/>
						<Answers
							answers={EMOJIS[this.state.question]} 
							onAnswerSelect={this.onAnswerSelect}
						/>
					</div>
				)}

				{this.state.finished && (
					<Finished 
						score={this.state.score}
						shareLink={this.getShareLink()}
						onReset={this.reset}
					/>
				)}

				<footer>
					<p>Inspired by this tweet by <a href="https://twitter.com/DanHarper7/status/781791987792044032">this tweet</a></p>

					<p>Made by <a href="http://robblewis.me">Robb Lewis</a> | View source <a href="https://github.com/rmlewisuk/whos-that-emoji">on GitHub</a></p>
				</footer>
			</div>
		);
	}

	onAnswerSelect = (correct) => {
		if (this.state.answered) return

		const score = correct ? this.state.score + 1 : this.state.score
		this.setState({ 
			score,
			correct,
			answered: true,
		}, this.state.question === QUESTIONS -1 ? this.finish() : this.nextQuestion())
	}

	nextQuestion = () => {
		setTimeout(() => {
			this.setState({
				answered: false,
				correct: false,
				question: this.state.question + 1
			})
		}, 1500)
	}

	finish = () => {
		setTimeout(() => {
			this.setState({ finished: true })
		}, 1500)
	}

	getAnswer = () => {
		return EMOJIS[this.state.question].filter((emoji) => {
		    return emoji.correct
		})[0]
	}

	getShareLink = () => {
		let link = "https://twitter.com/home?status=I%20scored%20"
		link += this.state.score
		link += "%20on%20Who's%20That%20Emoji?%20http%3A//code.robblewis.me/whos-that-emoji"
		return link
	}

	reset = () => {
		console.log("HERE");
		this.setState(INITIAL_STATE)
	}
}

export default App;
