
import * as React from 'react'

export class App extends React.Component {
	state = {
		cards: null,
		hours: null,
		musics: null
	}
	componentDidMount() {
		const fetchData = (url) => (
			fetch(url)
				.then(res => res.json())
				.then(out => out)
		).catch(err => console.error(err))
		fetchData('https://pmweb-dev.github.io/resumeCards.json').then(cards => this.setState({ cards: cards.cards }))
		fetchData('https://pmweb-dev.github.io/hoursQuantity.json').then(hours => this.setState({ hours: hours }))
		fetchData('https://pmweb-dev.github.io/musics.json').then(musics => this.setState({ musics: musics.musics }))
	}
	render() {
		console.log(this.state)
		return (
			<div className="container-fluid main">
				{
					<div className="cards">
						<h2>Overview</h2>
						<div className="row">
							<div className="col-md-4 cards-item">
								<span className="cards-item-title">Horas de música tocadas</span>
								<span className="tests">
									<span className="cards-item-value">{this.state.cards && this.state.cards.hours_music.hours}h</span>
									<span className="cards-item-difference">{this.state.cards && this.state.cards.hours_music.percent_diference}%</span>
								</span>
							</div>
							<div className="col-md-4 cards-item">
								{this.state.cards && this.state.cards.quantity_bands.bands}
							</div>
							<div className="col-md-4 cards-item">
								{this.state.cards && this.state.cards.lost_artists.losts}
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}