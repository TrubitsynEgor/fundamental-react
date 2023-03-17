import React from 'react'
import classes from './NotFound.module.css'


const NotFound = ({ page }) => {
	return (
		page
			? <h1 className={classes.title}>{page} not found</h1>
			: <h1 className={classes.title}>Post not found</h1>
	)
}

export default NotFound