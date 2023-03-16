import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import CreateForm from "./components/CreateForm";
import Post from "./components/Post";
import Posts from "./components/Posts";
import './styles/App.css'



const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Descriptions...' },
    { id: 2, title: 'CSS', body: 'Descriptions...' },
    { id: 3, title: 'HTML', body: 'Descriptions...' }
  ])

  return (

    <div className="App">
      <CreateForm setPosts={setPosts} posts={posts} />
      <Posts posts={posts} title='Posts List JavaScript:' />
    </div>

  );
}





export default App;
