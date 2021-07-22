import React, { useState, useCallback } from 'react'
import NavBar from '../src/components/NavBar'
import Search from '../src/components/Search'
import classes from '../src/assets/css/main.module.css'
import axios from 'axios'

const baseurl='https://salty-cliffs-35552.herokuapp.com'

const App = () => {
	const [albumId, setAlbumId] = useState()
	const [album, setAlbum] = useState([])

	const getAlbumById = useCallback(() => {
		axios
			.get(`${baseurl}/api/albums/${albumId}`)
			.then((res) => {
				setAlbum(res.data)
			})
			.catch((err) => console.log(err))
	}, [albumId])

	const getAlbumHandler = (e) => {
		e.preventDefault()
		getAlbumById()
	}
	return (
		<div className={classes.appWrapper}>
			<div className={classes.navSearchContainer}>
				<NavBar />
				<Search
					albumId={albumId}
					setAlbumId={setAlbumId}
					getAlbumHandler={getAlbumHandler}
				/>
			</div>

			<div className={classes.wrapper}>
				{album.map((album) => (
					<div key={album.id} className={classes.innerContainer}>
						<div className={classes.thumbnail}>
							<img src={album.thumbnailUrl} alt="" />
						</div>
						<div className={classes.title}>
							<p>{album.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
