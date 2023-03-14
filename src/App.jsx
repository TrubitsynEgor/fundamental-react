import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Post from "./components/Post";
import './styles/App.css'



const App = () => {
  return (

    <div className="App">
      <Post post={{ id: 1, title: 'JavaScript', body: 'Descriptions...' }} />
      <Post post={{ id: 2, title: 'JavaScript', body: 'Descriptions...' }} />
      <Post post={{ id: 3, title: 'JavaScript', body: 'Descriptions...' }} />
      <Post post={{ id: 4, title: 'JavaScript', body: 'Descriptions...' }} />
      <Post post={{ id: 5, title: 'JavaScript', body: 'Descriptions...' }} />
      <Post post={{ id: 6, title: 'JavaScript', body: 'Descriptions...' }} />

    </div>

  );
}





export default App;
