import * as React from 'react'
import music_icon from '../resources/music_icon.png'
import death_icon from '../resources/death_icon.png'
import poligono from '../resources/poligono.png'

export const Cards = (props) => {
	return (
		<div className="cards">
			<div className="cards-item">
				<span className="cards-item-title"><img src={music_icon} /> Horas de música tocadas</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards.hours_music.hours}h
					</span>
					<span className="cards-item-difference">
						<img src={poligono} /> {props.cards.hours_music.percent_diference}%
					</span>
				</span>
			</div>
			<div className="cards-item">
				<span className="cards-item-title"><img src={music_icon} /> Quantidade de bandas de rock</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards.lost_artists.losts}
					</span>
					<span className="cards-item-difference">
						<img src={poligono} /> {props.cards.lost_artists.percent_diference}%
					</span>
				</span>
			</div>
			<div className="cards-item">
				<span className="cards-item-title"><img src={death_icon} /> Perdas precoces de artistas incríveis</span>
				<span className="cards-item-wrapper">
					<span className="cards-item-value">
						{props.cards.quantity_bands.bands}
					</span>
					<span className="cards-item-difference negative">
						<img src={poligono} /> {props.cards.quantity_bands.percent_diference}%
					</span>
				</span>
			</div>
		</div>
	)
}