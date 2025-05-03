import styles from './Header.module.css'

export default function Header() {
	return (
		<div className={styles.header}>
			<img src='../../../public/logo.png'></img>
			<div className={styles.logoText}>
				<p className={styles.logoName}>Next Pizza</p>
				<p className={styles.logoDescription}>вкусней уже некуда</p>
			</div>
			<search>
				<form className={styles.headerForm}>
					<input type='search' />
					<button className={styles.btnSearch}>Поиск</button>
				</form>
			</search>
			<button className={styles.profile}>Войти</button>
			<button className={styles.basket}>basket</button>
		</div>
	)
}
