import { useState, useMemo } from "react";
import CreateForm from "./components/CreateForm";
import PostFilter from "./components/PostFilter";
import Posts from "./components/Posts";
import MyInput from "./components/UI/inputs/MyInput";
import NotFound from "./components/UI/not-found/NotFound";
import SortSelect from "./components/UI/selects/SortSelect";
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

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])


  return (

    <div className="App">
      <CreateForm createPost={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Posts removePost={removePost} posts={sortedAndSearchedPosts} title='Posts List JavaScript:' />


    </div>

  );
}





export default App;
