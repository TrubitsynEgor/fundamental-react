
import { TransitionGroup, CSSTransition } from "react-transition-group"
import PostItem from "./PostItem"
import NotFound from "./UI/not-found/NotFound"

const PostList = ({ posts, title, removePost }) => {

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
						<PostItem removePost={removePost} number={idx + 1} post={post} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

export default PostList