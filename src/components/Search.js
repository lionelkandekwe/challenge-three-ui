import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import classes from '../assets/css/search.module.css'

const Search = ({ albumId, setAlbumId, getAlbumHandler }) => {
	return (
		<div className={classes.searchContainer}>
			<div className={classes.searchInnerContainer}>
				<div className={classes.inputContainer}>
					<FontAwesomeIcon className={classes.icon} icon={faSearch} />
					<input
						type="text"
						id="get-Album-by-id"
						name="get-Album-by-id"
						value={albumId}
						onChange={(e) => setAlbumId(e.target.value)}
						placeholder="Get Album By Id"
					/>
				</div>
				<div className={classes.buttonContainer} onClick={getAlbumHandler}>
					<span>Get Album</span>
				</div>
			</div>
		</div>
	)
}

export default Search
