import { useState } from 'react'
import styles from './Sort.module.css'
export default function Sort() {
	const [color, setColor] = useState('#fafafa')
	const handleClick = () => {
		const newColor = color === '#fafafa' ? 'white' : 'blue'
		setColor(newColor)
	}
	return (
		<div className={styles.sort}>
			<p className={styles.sortTitle}>Все пиццы</p>
			<div className={styles.btnFilter}>
				<button className={styles.btnAll}>Все</button>
				<button className={styles.btnAll} onClick={handleClick}>
					Мясные
				</button>
				<button className={styles.btnAll}>Сладкие</button>
				<button className={styles.btnAll}>Вегетарианские</button>
				<button className={styles.btnAll}>С курицей</button>
				{/* <button className={styles.btnAll}></button> */}
			</div>
			{/* <button className={styles.btnSorting}>Сортировка</button> */}
		</div>
	)
}
