import { useState } from 'react'
import styles from './Filter.module.css'

export default function Filter() {
	const [isChecked, setIsChecked] = useState(false)

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
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Можно собирать</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
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
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					></input>
					<input
						className={styles.inputPrice}
						type='text'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
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
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Сливочный соус</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Моцарелла</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Пармезан</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Пепперони</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Моцарелла</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
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
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Традиционное</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={isChecked}
						onChange={e => setIsChecked(e.target.checked)}
					/>
					<span>Тонкое</span>
				</label>
			</div>

			<button className={styles.filterBtn}>Применить</button>
		</div>
	)
}
