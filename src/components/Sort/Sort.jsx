import styles from './Sort.module'

export default function Sort() {
	return (
		<div className={styles.sort}>
			<p className={styles.sortTitle}>Все пиццы</p>
			<div className={styles.btnFilter}>
				<button className={styles.btnAll}></button>
				<button className={styles.btnAll}></button>
				<button className={styles.btnAll}></button>
				<button className={styles.btnAll}></button>
				<button className={styles.btnAll}></button>
				<button className={styles.btnAll}></button>
			</div>
			<button className={styles.btnSorting}>Сортировка</button>
		</div>
	)
}
