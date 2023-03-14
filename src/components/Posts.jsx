
import Post from "./Post"

const Posts = ({ posts, title }) => {



	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map(post => {
				return <Post post={post} key={post.id} />
			})}
		</div>
	)
}

export default Posts