import BasketIcon from '../../svg/BasketIcon'
import ProfileIcon from '../../svg/ProfileIcon'
import SearchIcon from '../../svg/SearchIcon'
import styles from './Header.module.css'
export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src='../../../public/logo.png'></img>
			</div>
			<div className={styles.logoText}>
				<p className={styles.logoName}>NEXT PIZZA</p>
				<p className={styles.logoDescription}>вкусней уже некуда</p>
			</div>
			<search>
				<form className={styles.headerForm}>
					<input type='search' placeholder='Поиск...' />
					<SearchIcon width='16' height='16' />
					{/* <button className={styles.btnSearch}>Поиск</button> */}
				</form>
			</search>
			<button className={styles.profile}>
				<ProfileIcon width='13' height='15' />
				Войти
			</button>
			<button className={styles.basket}>
				<BasketIcon width='18' height='18' />
			</button>
		</div>
	)
}
