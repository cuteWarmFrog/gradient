import React from 'react'
import './../styles/style.css'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			displaySettings: true,
			amount: 3,

			gradient: {
				deg: "90deg",
				colors: ["#f97c78", "#328998", "#698664"]
			}

			
		}
		this.makeGradient = this.makeGradient.bind(this);
		this.changeSettingsState = this.changeSettingsState.bind(this);
		this.incrAmount = this.incrAmount.bind(this);
		this.decrAmount = this.decrAmount.bind(this);
	}

	render() {
		if(this.state.displaySettings) {
			return (
				<div style={this.changeColor()} id="main">
					<div id="main-settings">
						<div id="settings-open-close">
							<button onClick={this.changeSettingsState}>Close</button>
						</div>
						<div>
							<p id="number">number of colours</p>
							<div id="amount-settings">
								<button className="incr-decr" onClick={this.decrAmount}>-</button>
								<p>{this.state.amount}</p>
								<button className="incr-decr" onClick={this.incrAmount}>+</button>
							</div>
							<button onClick={this.makeGradient} id="make-gradient">new colors</button>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div style={this.changeColor()} id="main">
					<button onClick={this.changeSettingsState}>Settings</button>
				</div>
			);
		}
	}

	incrAmount() {
		const colors = [...this.state.gradient.colors];

		if(this.state.amount > this.state.gradient.colors.length - 1) {
			const color = '#'+Math.random().toString(16).substr(-6);
			colors.push(color);
		}
		this.setState(prev => {
			return {
				amount: prev.amount + 1,
				gradient: {
					deg: this.state.gradient.deg,
					colors: colors
				}
			}
		})
	}

	decrAmount() {
		if(this.state.amount > 2) {
			this.setState(prev => {
				return {
					amount: prev.amount - 1
				}
			})
		}
		this.changeColor()
	}

	changeSettingsState() {
		this.setState({
			displaySettings: !this.state.displaySettings
		})
	}

	changeColor() {
		return {
			background: `linear-gradient(${this.state.gradient.deg}, 
			${this.state.gradient.colors.slice(0,this.state.amount).join(',')}`
		}
	}

	makeGradient() {
		const deg = Math.random() * 90 + 'deg';

		const colors = [];
		for(let i = 0; i < this.state.amount; i++) {
			const color = '#'+Math.random().toString(16).substr(-6);
			colors.push(color);
		}

		this.setState({
			gradient: {
				deg: deg,
				colors: colors
			}
		})
	}
}

export default App;