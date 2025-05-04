import styles from './Filter.module'

export function Filter() {
	return (
		<div className={styles.filter}>
			<p className={styles.filterTitle}>Фильтрация</p>
			<div className={styles.checkboxSize}>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Можно собирать</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Новинки</label>
				</div>
			</div>
			<p className={styles.filterText}>Цена от и до</p>
			<div className={styles.filterPriceInput}>
				<input type='text'></input>
				<input type='text'></input>
			</div>
			<p className={styles.filterText}>Ингредиенты:</p>
			<div className={styles.checkboxSize}>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Сырный соус</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Моцарелла</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Чеснок</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Соленые огурчики</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Красный лук</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Томаты</label>
				</div>
			</div>
			<p className={styles.filterText}>Тип теста:</p>
			<div className={styles.checkboxSize}>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Традиционное</label>
				</div>
				<div className={styles.checkbox}>
					<input type='checkbox' id='scales' name='scales' checked />
					<label for='scales'>Тонкое</label>
				</div>
			</div>
			<button className={styles.filterBtn}>Применить</button>
		</div>
	)
}
