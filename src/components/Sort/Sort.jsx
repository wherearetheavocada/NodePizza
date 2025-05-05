import { useState } from 'react'
import styles from './Sort.module.css'

export default function Sort() {
	const [activeButton, setActiveButton] = useState(1)

	const handleClick = buttonId => {
		setActiveButton(buttonId)
	}

	const getButtonStyle = buttonId => {
		const isActive = activeButton === buttonId

		if (buttonId === 1) {
			return {
				backgroundColor: isActive ? 'white' : '#fafafa',
				color: isActive ? '#FE5F00' : 'black',
			}
		} else {
			return {
				backgroundColor: isActive ? 'white' : '#fafafa',
				color: isActive ? '#FE5F00' : 'black',
			}
		}
	}

	return (
		<div className={styles.sort}>
			<p className={styles.sortTitle}>Все пиццы</p>
			<div className={styles.btnFilter}>
				<button
					className={styles.btnAll}
					style={getButtonStyle(1)}
					onClick={() => handleClick(1)}
				>
					Все
				</button>

				{['Мясные', 'Сладкие', 'Вегетарианские', 'С курицей'].map(
					(text, index) => (
						<button
							key={text}
							className={styles.btnAll}
							style={getButtonStyle(index + 2)}
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
