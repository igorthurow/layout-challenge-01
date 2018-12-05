
import * as React from 'react'
import { Cards } from './components/cards'
import { Musics } from './components/musics'
import { Paginate } from './components/paginate'
import logo from './resources/logo.png'
import logo_alt from './resources/logo_alt.png'
import { Chart } from './components/chart';

export class App extends React.Component {
	state = {
		cards: null,
		hours: null,
		musics: null,
		paginate: 0
	}
	componentWillMount() {
		const fetch = (url) => {
			return new Promise(resolve => {
				const request = new XMLHttpRequest()
				request.open('GET', url)
				request.responseType = 'json'
				request.onload = () => {
					if (request.readyState === 4) {
						if (request.status === 200) {
							resolve(request.response)
						}
					}
				}
				request.send()
			})
		}
		Promise.all([
			fetch('https://pmweb-dev.github.io/resumeCards.json'),
			fetch('https://pmweb-dev.github.io/hoursQuantity.json'),
			fetch('https://pmweb-dev.github.io/musics.json')
		]).then(data => this.setState({
			cards: data[0].cards,
			hours: data[1],
			musics: data[2].musics
		}))
	}
	render() {
		return (
			<div className="main">
				<div className="top">
					<div className="container">
						<img src={logo} alt="logo pmweb" />
						<img src={logo_alt} alt="logo alternative" />
					</div>
				</div>
				<div className="container content">
					<h2 className="title">Overview</h2>
					{this.state.cards && (
						<Cards cards={this.state.cards} />
					)}
					{this.state.hours && (
						<Chart hours={this.state.hours.hours_quantity.hours} quantity={this.state.hours.hours_quantity.quantity} />
					)}
					<h2 className="title">Músicas</h2>
					{this.state.musics && (
						<Musics paginate={this.state.paginate} musics={this.state.musics} />
					)}
					{this.state.musics && (
						<Paginate paginate={this.state.paginate} musics={this.state.musics} actualPage={paginate => this.setState({ paginate })} />
					)}
				</div>
				<footer className="footer">
					<div className="container">
						<img src={logo} alt="logo pmweb" />
					</div>
				</footer>
			</div>
		)
	}
}