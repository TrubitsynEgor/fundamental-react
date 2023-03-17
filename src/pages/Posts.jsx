import { useState, useEffect, useRef } from "react";
import { PostService } from "../API/PostService";
import CreateForm from '../components/CreateForm'
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/buttons/MyButton";
import PostLoader from "../components/UI/loader/PostLoader";
import MyModal from "../components/UI/modals/MyModal";
import PostsPagination from "../components/UI/pagination/PostsPagination";
import SortSelect from "../components/UI/selects/SortSelect";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
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
	const lastElement = useRef()


	const [fetchPost, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPost(limit, page)
	}, [page, limit])



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
			<SortSelect value={limit} onChange={value => setLimit(value)}
				defaultValue='Elements on page:'
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 15, name: '15' },
					{ value: 20, name: '20' },
					{ value: -1, name: 'Show all' },
				]}
			/>


			{postError && <h1 style={{ color: 'tomato', textAlign: 'center' }}> Post ERROR! {postError} </h1>}

			{isPostLoading && <PostLoader />}
			<PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Posts List JavaScript:' />
			<div ref={lastElement} style={{ height: '20px', background: 'tomato' }}></div>
			<PostsPagination totalPages={totalPages} page={page} changePage={changePage} />
		</div >

	);
}

export default Posts;
