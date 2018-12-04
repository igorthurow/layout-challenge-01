import * as React from 'react'

export const Cards = (props) => {
	return (
		<div className="cards">
			<div className="cards-item">
				<span className="cards-item-title"><i className="fas fa-music"></i>Horas de música tocadas</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards && props.cards.hours_music.hours}h
								</span>
					<span className="cards-item-difference">
						{props.cards && props.cards.hours_music.percent_diference}%
								</span>
				</span>
			</div>
			<div className="cards-item">
				<span className="cards-item-title"><i className="fas fa-music"></i>Quantidade de bandas de rock</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards && props.cards.lost_artists.losts}
					</span>
					<span className="cards-item-difference">
						{props.cards && props.cards.lost_artists.percent_diference}%
								</span>
				</span>
			</div>
			<div className="cards-item">
				<span className="cards-item-title">Perdas precoces de artistas incríveis</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards && props.cards.quantity_bands.bands}
					</span>
					<span className="cards-item-difference negative">
						{props.cards && props.cards.quantity_bands.percent_diference}%
								</span>
				</span>
			</div>
		</div>
	)
}