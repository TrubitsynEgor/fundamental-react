import { useState, useEffect } from "react";
import { PostService } from "../API/PostService";
import CreateForm from '../components/CreateForm'
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/buttons/MyButton";
import PostLoader from "../components/UI/loader/PostLoader";
import MyModal from "../components/UI/modals/MyModal";
import PostsPagination from "../components/UI/pagination/PostsPagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount, getPagesArray } from "../utils/pages";



const Posts = () => {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({
		sort: '',
		query: '',
	})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


	const [fetchPost, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})


	useEffect(() => {
		fetchPost()
	}, [page])



	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)

	}

	return (

		<div className="posts">
			<MyButton style={{ margin: '15px 0' }} onClick={() => setModal(true)}>Create post!</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<CreateForm createPost={createPost} />
			</MyModal>

			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h1 style={{ color: 'tomato', textAlign: 'center' }}> Post ERROR! {postError} </h1>}

			{isPostLoading
				? <PostLoader />
				: <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Posts List JavaScript:' />
			}

			<PostsPagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>

	);
}

export default Posts;
