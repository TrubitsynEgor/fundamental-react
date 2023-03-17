import { Route, Routes } from 'react-router-dom'
import NotFound from './UI/not-found/NotFound'
import About from '../pages/About'
import Posts from '../pages/Posts'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound page='Page' />} />
			<Route path="/about" element={<About />} />
			<Route path="/posts" element={<Posts />} />
		</Routes>
	)
}

export default AppRouter