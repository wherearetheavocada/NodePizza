import { useState } from 'react'
import styles from './Sort.module.css'

export default function Sort() {
	// Храним ID активной кнопки (1 - первая кнопка)
	const [activeButton, setActiveButton] = useState(1)

	// Обработчик клика для всех кнопок
	const handleClick = buttonId => {
		setActiveButton(buttonId)
	}

	return (
		<div className={styles.sort}>
			<p className={styles.sortTitle}>Все пиццы</p>
			<div className={styles.btnFilter}>
				{/* Кнопка 1 */}
				<button
					className={styles.btnAll}
					style={{
						backgroundColor: activeButton === 1 ? 'white' : '#fafafa',
					}}
					onClick={() => handleClick(1)}
				>
					Все
				</button>

				{['Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей'].map(
					(text, index) => (
						<button
							key={text}
							className={styles.btnAll}
							style={{
								backgroundColor:
									activeButton === index + 2 ? 'white' : '#fafafa',
							}}
							onClick={() => handleClick(index + 2)}
						>
							{text}
						</button>
					)
				)}
			</div>
		</div>
	)
}
