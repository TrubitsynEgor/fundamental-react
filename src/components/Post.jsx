import React from 'react'

const Post = ({ post: { id, title, body }, number }) => {
	return (
		<div className='post'>
			<div className="post__content">
				<strong>{number}. {title}</strong>
				<div>
					{body}
				</div>
			</div>
			<div className="post__btns">
				<button>Delete</button>
			</div>
		</div>
	)
}

export default Post