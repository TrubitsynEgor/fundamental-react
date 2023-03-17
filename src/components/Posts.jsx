
import Post from "./Post"
import NotFound from "./UI/not-found/NotFound"

const Posts = ({ posts, title, removePost }) => {

	if (!posts.length) {
		return <NotFound />
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map((post, idx) => {
				return <Post removePost={removePost} number={idx + 1} post={post} key={post.id} />
			})}
		</div>
	)
}

export default Posts