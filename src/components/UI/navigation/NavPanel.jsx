import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../buttons/MyButton'
import cls from './NavPanel.module.css'


const NavPanel = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	return (
		<ul className={cls.navbar}>
			<li className={cls.navbar__item}>
				<Link to="/about" className={cls.navbar__link}>About</Link>
			</li>
			<li className={cls.navbar__item}>
				<Link to="/posts" className={cls.navbar__link}>Posts</Link>
			</li>
			{
				isAuth
					? <li className={cls.navbar__item}>
						<MyButton onClick={logout} className={cls.navbar__link}>Logout</MyButton>
					</li>
					: <li className={cls.navbar__item}>
						<Link to='/login' className={cls.navbar__link}>Login</Link>
					</li>
			}

		</ul>
	)
}

export default NavPanel