
import * as React from 'react'
import { Cards } from './components/cards'

export class App extends React.Component {
	state = {
		cards: null,
		hours: null,
		musics: null
	}
	componentWillMount() {
		const fetch = (url) => {
			return new Promise(resolve => {
				const request = new XMLHttpRequest()
				request.open('GET', url)
				request.responseType = 'json'
				request.onload = () => {
					if (request.readyState == 4) {
						if (request.status == 200) {
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
			<div className="container-fluid main">
				<div className="container">
					<h2>Overview</h2>
					<Cards cards={this.state.cards} />
				</div>
			</div>
		)
	}
}