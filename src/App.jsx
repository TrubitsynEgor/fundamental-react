import axios from "axios";
import { useState, useEffect } from "react";
import { PostService } from "./API/PostService";
import CreateForm from "./components/CreateForm";
import PostFilter from "./components/PostFilter";
import Posts from "./components/Posts";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import PostLoader from "./components/UI/loader/PostLoader";
import MyModal from "./components/UI/modals/MyModal";
import NotFound from "./components/UI/not-found/NotFound";
import SortSelect from "./components/UI/selects/SortSelect";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css'



const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Descriptions1...' },
    { id: 2, title: 'CSS', body: 'Descriptions2...' },
    { id: 3, title: 'HTML', body: 'Descriptions3...' }
  ])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const fetchPosts = async () => {
    setIsPostLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostLoading(false)
  }

  return (

    <div className="App">
      <MyButton style={{ margin: '15px 0' }} onClick={() => setModal(true)}>Create post!</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <CreateForm createPost={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading
        ? <PostLoader />
        : <Posts removePost={removePost} posts={sortedAndSearchedPosts} title='Posts List JavaScript:' />
      }


    </div>

  );
}

export default App;
