import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '../reducer/basket/basketSlice'
const reducers = combineReducers({
	basketReducer,
})

export default configureStore({
	reducer: {
		reducer: reducers,
	},
})
