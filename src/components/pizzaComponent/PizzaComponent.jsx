import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../../slice/pizza/PizzaSlice'
import styles from './pizzaComponent.module.css'

const PizzaComponent = () => {
	const dispatch = useDispatch()
	const { items, status, error, filters } = useSelector(
		state => state.reducer.pizzaReducer
	)

	const filteredPizzas = useMemo(() => {
		return items.filter(pizza => {
			// Фильтр по новинкам
			if (filters.showNew && !pizza.is_new) return false

			// Фильтр по цене
			if (filters.price.min && pizza.price < filters.price.min) return false
			if (filters.price.max && pizza.price > filters.price.max) return false

			// Фильтр по ингредиентам
			const activeIngredients = Object.entries(filters.ingredients)
				.filter(([_, checked]) => checked)
				.map(([ingredient]) => ingredient)

			if (activeIngredients.length > 0) {
				const pizzaIngredients =
					pizza.pizzas_ingredients?.map(pi =>
						pi.ingredients.ingredient.toLowerCase()
					) || []

				const hasAllIngredients = activeIngredients.every(ing => {
					const ingName = ing === 'parmesanCheese' ? 'parmesan' : ing
					return pizzaIngredients.includes(ingName.toLowerCase())
				})
				if (!hasAllIngredients) return false
			}

			// Фильтр по типу теста
			if (filters.doughType.traditional && pizza.dough_type !== 'traditional')
				return false
			if (filters.doughType.subtle && pizza.dough_type !== 'thin') return false

			return true
		})
	}, [items, filters])

	useEffect(() => {
		dispatch(fetchPizzas())
	}, [dispatch])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	return (
		<div className={styles.pizzaContainer}>
			{filteredPizzas.map(pizza => (
				<div key={pizza.id} className={styles.pizzaCard}>
					<img
						src={pizza.image_url}
						alt={pizza.name}
						className={styles.pizzaImage}
					/>
					<h2 className={styles.pizzaName}>{pizza.name}</h2>
					<p className={styles.description}>{pizza.description}</p>
					<div className={styles.ingredientsSection}>
						<h3 className={styles.ingredient}>Ингредиенты:</h3>
						{pizza.pizzas_ingredients?.length > 0 ? (
							<p className={styles.ingredientsList}>
								{(() => {
									const ingredients = pizza.pizzas_ingredients.map(
										item => item.ingredients.ingredient
									)
									const [first, ...rest] = ingredients
									return [
										first.charAt(0).toUpperCase() + first.slice(1),
										...rest.map(ing => ing.toLowerCase()),
									].join(', ')
								})()}
							</p>
						) : (
							<p>Ингредиенты не указаны</p>
						)}
					</div>
					<div className={styles.basket}>
						<p className={styles.price}>От {pizza.price} $</p>
						<button className={styles.btnBasket}>+ Добавить</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default PizzaComponent
