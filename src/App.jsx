import { useState } from "react";
import CreateForm from "./components/CreateForm";
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
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('calls function sorted ');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts
  }
  const sortedPost = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  return (

    <div className="App">
      <CreateForm createPost={createPost} />

      <hr style={{ margin: '15px 0' }} />

      <MyInput
        placeholder='Search...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <SortSelect
        onChange={sortPosts}
        value={selectedSort}
        defaultValue='Sort by'
        disabled
        options={[
          { value: 'title', name: 'Title' },
          { value: 'body', name: 'Description' }
        ]} />


      {
        posts.length
          ? <Posts removePost={removePost} posts={sortedPost} title='Posts List JavaScript:' />
          : <NotFound />
      }

    </div>

  );
}





export default App;
