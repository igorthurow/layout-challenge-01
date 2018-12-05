import * as React from 'react'
import left from '../resources/left.png'
import right from '../resources/right.png'

export const Paginate = (props) => {
	const paginateLength = []
	for (let i = 0; i < Math.ceil(props.musics.length / 10); i++) {
		paginateLength.push({ page: i + 1, index: i })
	}
	return (
		<div className="paginate container-fluid">
			<img src={left} className={`controller left ${props.paginate === 0 ? 'disabled' : ''}`}
				onClick={() => (props.paginate > 0) && props.actualPage(props.paginate - 1)} />
			{
				paginateLength.map((button, index) => (
					<span key={index} className={`paginate-button ${props.paginate === index ? 'active' : ''}`} onClick={() => props.actualPage(button.index)}>
						{button.page}
					</span>
				))
			}
			<img src={right} className={`controller right ${(props.paginate === (paginateLength.length - 1)) ? 'disabled' : ''}`}
				onClick={() => (props.paginate < (paginateLength.length - 1)) && props.actualPage(props.paginate + 1)} />
		</div>
	)
}