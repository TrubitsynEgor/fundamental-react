
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Post from "./Post"
import NotFound from "./UI/not-found/NotFound"

const Posts = ({ posts, title, removePost }) => {

	if (!posts.length) {
		return <NotFound />
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, idx) =>
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames='post'>
						<Post removePost={removePost} number={idx + 1} post={post} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

export default Posts