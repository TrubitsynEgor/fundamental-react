import { useNavigate } from 'react-router-dom'
import MyButton from './UI/buttons/MyButton'

const PostItem = ({ post: { id, title, body }, number, removePost, post }) => {
	const router = useNavigate()
	return (
		<div className='post'>
			<div className="post__content">
				<strong>{id}. {title}</strong>
				<div>
					{body}
				</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => router(`/posts/${id}`)}>Open</MyButton>
				<MyButton onClick={() => removePost(post)}>Delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem