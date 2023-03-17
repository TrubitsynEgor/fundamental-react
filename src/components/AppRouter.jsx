import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './UI/not-found/NotFound'
import { publicRoutes, privateRoutes } from '../router'
import { useContext } from 'react'
import { AuthContext } from '../context'
import PostLoader from './UI/loader/PostLoader'

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <PostLoader />
	}
	return (
		isAuth

			? <Routes>
				<Route path="*" element={<Navigate to='/posts' replace />} />
				{privateRoutes.map(route =>
					<Route key={route.component} element={route.component} path={route.path} />
				)}
			</Routes>

			: <Routes>
				<Route path="*" element={<Navigate to='/login' replace />} />
				{publicRoutes.map(route =>
					<Route key={route.component} element={route.component} path={route.path} />
				)}
			</Routes>
	)
}

export default AppRouter