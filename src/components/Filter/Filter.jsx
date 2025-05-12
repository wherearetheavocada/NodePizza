import { useDispatch, useSelector } from 'react-redux'
import {
	setPriceFilter,
	toggleDoughTypeFilter,
	toggleIngredientFilter,
	toggleNewFilter,
} from '../../slice/pizza/PizzaSlice'
import styles from './Filter.module.css'
export default function Filter() {
	const dispatch = useDispatch()
	const { filters } = useSelector(state => state.reducer.pizzaReducer)

	const handlePriceChange = (type, value) => {
		const numValue = value === '' ? null : Number(value)
		dispatch(setPriceFilter({ [type]: numValue }))
	}

	const handleIngredientToggle = ingredient => {
		dispatch(toggleIngredientFilter(ingredient))
	}

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
						checked={filters.showNew}
						onChange={() => dispatch(toggleNewFilter())}
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
						placeholder='0'
						value={filters.price.min || ''}
						onChange={e => handlePriceChange('min', e.target.value)}
					></input>
					<input
						className={styles.inputPrice}
						type='text'
						placeholder='0'
						value={filters.price.max || ''}
						onChange={e => handlePriceChange('max', e.target.value)}
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
						checked={filters.ingredients.creamySauce}
						onChange={() => handleIngredientToggle('creamySauce')}
					/>
					<span>Сливочный соус</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.ingredients.mozzarella}
						onChange={() => handleIngredientToggle('mozzarella')}
					/>
					<span>Моцарелла</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.ingredients.parmesanCheese}
						onChange={() => handleIngredientToggle('parmesanCheese')}
					/>
					<span>Пармезан</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.ingredients.pepperoni}
						onChange={() => handleIngredientToggle('pepperoni')}
					/>
					<span>Пепперони</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.ingredients.bacon}
						onChange={() => handleIngredientToggle('bacon')}
					/>
					<span>Бекон</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.ingredients.chicken}
						onChange={() => handleIngredientToggle('chicken')}
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
						checked={filters.doughType.traditional}
						onChange={() => dispatch(toggleDoughTypeFilter('traditional'))}
					/>
					<span>Традиционное</span>
				</label>
				<label htmlFor='scales' className={styles.label}>
					<input
						type='checkbox'
						className={styles.inputCheckbox}
						id='scales'
						name='scales'
						checked={filters.doughType.subtle}
						onChange={() => dispatch(toggleDoughTypeFilter('subtle'))}
					/>
					<span>Тонкое</span>
				</label>
			</div>

			<button className={styles.filterBtn}>Применить</button>
		</div>
	)
}
