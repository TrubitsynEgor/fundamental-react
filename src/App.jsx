import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavPanel from "./components/UI/navigation/NavPanel";
import NotFound from "./components/UI/not-found/NotFound";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css'


const App = () => {


  return (
    <BrowserRouter>
      <NavPanel />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
