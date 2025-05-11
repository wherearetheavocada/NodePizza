import { useState } from 'react'
import styles from './Filter.module.css'

export default function Filter() {
	const [isCheckedNew, setIsCheckedNew] = useState(false)
	const [isCheckedPriceFrom, setIsCheckedPriceFrom] = useState(false)
	const [isCheckedPriceBefore, setIsCheckedPriceBefore] = useState(false)
	const [isCheckedCreamySauce, setIsCheckedCreamySauce] = useState(false)
	const [isCheckedMozzarella, setIsCheckedMozzarella] = useState(false)
	const [isCheckedParmesan, setIsCheckedParmesan] = useState(false)
	const [isCheckedPepperoni, setIsCheckedPepperoni] = useState(false)
	const [isCheckedBacon, setIsCheckedBacon] = useState(false)
	const [isCheckedСhicken, setIsCheckedСhicken] = useState(false)
	const [isCheckedTraditional, setIsCheckedTraditional] = useState(false)
	const [isCheckedSubtle, setIsCheckedSubtle] = useState(false)

	return (
		<div className={styles.filter}>
			<p className={styles.filterTitle}>Фильтрация</p>
			<div className={styles.checkboxSize}>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedNew}
						onChange={e => setIsCheckedNew(e.target.checked)}
					/>
					<span>Новинки</span>
				</label>
			</div>
			<div className={styles.checkboxSize}>
				<p className={styles.filterText}>Цена от и до:</p>
				<div className={styles.filterPriceInput}>
					<input
						className={styles.inputPrice}
						type='text'
						checked={isCheckedPriceFrom}
						onChange={e => setIsCheckedPriceFrom(e.target.checked)}
					></input>
					<input
						className={styles.inputPrice}
						type='text'
						checked={isCheckedPriceBefore}
						onChange={e => setIsCheckedPriceBefore(e.target.checked)}
					></input>
				</div>
			</div>

			<div className={styles.checkboxSize}>
				<p className={styles.filterText}>Ингредиенты:</p>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedCreamySauce}
						onChange={e => setIsCheckedCreamySauce(e.target.checked)}
					/>
					<span>Сливочный соус</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedMozzarella}
						onChange={e => setIsCheckedMozzarella(e.target.checked)}
					/>
					<span>Моцарелла</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedParmesan}
						onChange={e => setIsCheckedParmesan(e.target.checked)}
					/>
					<span>Пармезан</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedBacon}
						onChange={e => setIsCheckedBacon(e.target.checked)}
					/>
					<span>Пепперони</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedPepperoni}
						onChange={e => setIsCheckedPepperoni(e.target.checked)}
					/>
					<span>Бекон</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedСhicken}
						onChange={e => setIsCheckedСhicken(e.target.checked)}
					/>
					<span>Курица</span>
				</label>
			</div>
			<div className={styles.checkboxSize}>
				<p className={styles.filterText}>Тип теста:</p>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedTraditional}
						onChange={e => setIsCheckedTraditional(e.target.checked)}
					/>
					<span>Традиционное</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isCheckedSubtle}
						onChange={e => setIsCheckedSubtle(e.target.checked)}
					/>
					<span>Тонкое</span>
				</label>
			</div>

			<button className={styles.filterBtn}>Применить</button>
		</div>
	)
}
