import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PostService } from "../API/PostService";
import PostLoader from "../components/UI/loader/PostLoader";
import { useFetching } from "../hooks/useFetching";




const Post = () => {

	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentsById(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div style={{ padding: '0 20px' }}>
			<h1 style={{ marginTop: '50px', textAlign: 'center' }}>This is Post page: ID - {params.id}</h1>
			{isLoading
				? <PostLoader />
				: <div className="post__content">
					<h2>{post.id}.{post.title}</h2>
					<p>{post.body}</p>
				</div>
			}

			<h2 style={{ marginTop: '30px', textAlign: 'center' }}>
				Comments
			</h2>
			{isLoading
				? <PostLoader />
				: <div>
					{comments.map(comm =>
						<div key={comm.id} style={{ marginTop: '30px', textAlign: 'center' }}>
							<h5>{comm.email}</h5>
							<p>{comm.body}</p>
						</div>
					)}
				</div>
			}

		</div>
	)
}

export default Post