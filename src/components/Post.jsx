import React from 'react'
import MyButton from './UI/buttons/MyButton'

const Post = ({ post: { title, body }, number, removePost, post }) => {

	return (
		<div className='post'>
			<div className="post__content">
				<strong>{number}. {title}</strong>
				<div>
					{body}
				</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => removePost(post)}>Delete</MyButton>
			</div>
		</div>
	)
}

export default Post