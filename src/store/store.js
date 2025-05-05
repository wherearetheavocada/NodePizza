import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '../slice/basket/basketSlice'
import pizzaReducer from '../slice/pizza/PizzaSlice'
const reducers = combineReducers({
	basketReducer,
	pizzaReducer,
})

export default configureStore({
	reducer: {
		reducer: reducers,
	},
})
