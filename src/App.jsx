import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Post from "./components/Post";
import Posts from "./components/Posts";
import './styles/App.css'



const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Descriptions...' },
    { id: 2, title: 'CSS', body: 'Descriptions...' },
    { id: 3, title: 'HTML', body: 'Descriptions...' }
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Descriptions...' },
    { id: 2, title: 'PHP', body: 'Descriptions...' },
    { id: 3, title: 'Backend', body: 'Descriptions...' }
  ])
  return (

    <div className="App">
      <Posts posts={posts} title='Posts List JavaScript:' />
      <Posts posts={posts2} title='Posts List Python:' />


    </div>

  );
}





export default App;
