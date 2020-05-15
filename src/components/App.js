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
				colors: ["#FF14AF", "#E231AE", "#AEBB78"]
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
							<p>number of colours</p>
							<div id="amount-settings">
								<button onClick={this.decrAmount}>-</button>
								<p>{this.state.amount}</p>
								<button onClick={this.incrAmount}>+</button>
							</div>
							<button onClick={this.makeGradient} id="make-gradient">do magic</button>
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
		this.setState(prev => {
			return {
				amount: prev.amount + 1
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
		return;
	}

	changeSettingsState() {
		this.setState({
			displaySettings: !this.state.displaySettings
		})
	}

	changeColor() {
		return {
			background: `linear-gradient(${this.state.gradient.deg}, 
			${this.state.gradient.colors.join(',')}`
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