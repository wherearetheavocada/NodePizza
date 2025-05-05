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
			<h1>Pizza Menu</h1>
			<ul>
				{items.map(pizza => (
					<li key={pizza.id}>
						<h2>{pizza.name}</h2>
						{/* <p>Price: ${pizza.price}</p>
						<p>Ingredients: {pizza.ingredients?.join(', ')}</p> */}
					</li>
				))}
			</ul>
		</div>
	)
}

export default PizzaComponent
