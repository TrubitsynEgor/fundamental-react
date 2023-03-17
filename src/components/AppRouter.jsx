import { Route, Routes } from 'react-router-dom'
import NotFound from './UI/not-found/NotFound'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Post from '../pages/Post'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound page='Page' />} />
			<Route path="/about" element={<About />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/posts/:id" element={<Post />} />
		</Routes>
	)
}

export default AppRouter