import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '../reducer/basket/basketSlice'
import pizzaReducer from '../reducer/Pizza/PizzaSlice'
const reducers = combineReducers({
	basketReducer,
	pizzaReducer,
})

export default configureStore({
	reducer: {
		reducer: reducers,
	},
})
