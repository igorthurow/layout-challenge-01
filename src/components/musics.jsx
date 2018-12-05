import * as React from 'react'

export const Musics = (props) => {
	const musics = props.musics.slice()
	const pages = []
	while (musics.length > 0) {
		pages.push(musics.splice(0, 10))
	}
	const formatDate = (slug) => {
		const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
			"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		const date = slug.split('-')
		return (
			`${date[2]} ${monthNames[(date[1] - 1)]} ${date[0]}`
		)
	}
	return (
		<div className="musics container-fluid">
			<span className="labels row">
				<span className="label-id col-md-1">Id</span>
				<span className="label-title col-md-4">Título</span>
				<span className="label-rate col-md-2">Avaliação</span>
				<span className="label-dateRecord col-md-2">Data de gravação</span>
				<span className="label-artist col-md-3">Artista</span>
			</span>
			{
				pages[props.paginate].map((music, index) => (
					<span key={index} className="music row">
						<span className="music-id col-md-1"><span className="music-mobile">Id: </span>{music.id}</span>
						<span className="music-title col-md-4"><span className="music-mobile">Título: </span>{music.title}</span>
						<span className="music-rate col-md-2"><span className="music-mobile">Avaliação: </span>{music.rate}</span>
						<span className="music-dateRecord col-md-2"><span className="music-mobile">Data de gravação: </span>{formatDate(music.date_record)}</span>
						<span className="music-artist col-md-3"><span className="music-mobile">Artista: </span>{music.artist}</span>
					</span>
				))
			}
		</div>
	)
}