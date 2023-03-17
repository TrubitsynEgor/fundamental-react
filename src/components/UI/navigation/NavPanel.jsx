import { Link } from 'react-router-dom'
import cls from './NavPanel.module.css'


const NavPanel = () => {
	return (
		<ul className={cls.navbar}>
			<li className={cls.navbar__item}>
				<Link to="/about" className={cls.navbar__link}>About</Link>
			</li>
			<li className={cls.navbar__item}>
				<Link to="/posts" className={cls.navbar__link}>Posts</Link>
			</li>
		</ul>
	)
}

export default NavPanel