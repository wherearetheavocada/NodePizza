import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../../slice/pizza/PizzaSlice'

const PizzaComponent = () => {
	const dispatch = useDispatch()
	const { items, status, error } = useSelector(
		state => state.reducer.pizzaReducer
	)

	useEffect(() => {
		console.log('ddd')
		dispatch(fetchPizzas())
	}, [dispatch])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	return (
		<div>
			<ul>
				{items.map(pizza => (
					<li key={pizza.id}>
						<h2>{pizza.name}</h2>
						<p>description: {pizza.description}</p>
						<p>Price: ${pizza.price}</p>
						<h3>Ингредиенты:</h3>
						{pizza.pizzas_ingredients?.length > 0 ? (
							<p>
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
					</li>
				))}
			</ul>
		</div>
	)
}

export default PizzaComponent
