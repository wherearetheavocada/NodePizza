import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const API_OPTIONS = {
	headers: {
		Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
		apikey: import.meta.env.VITE_API_KEY,
	},
}

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzas',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(API_URL + '/pizzas', API_OPTIONS)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState: {
		items: [],
		status: 'idle',
		error: null,
		filters: {
			showNew: false,
			ingredients: {
				creamySauce: false,
				mozzarella: false,
				parmesanCheese: false,
				pepperoni: false,
				bacon: false,
				chicken: false,
			},
			doughType: {
				traditional: false,
				subtle: false,
			},
			price: {
				min: null,
				max: null,
			},
		},
	},
	reducers: {
		toggleNewFilter(state) {
			state.filters.showNew = !state.filters.showNew
		},
	},
	toggleIngredientFilter: (state, action) => {
		const ingredient = action.payload
		state.filters.ingredients[ingredient] =
			!state.filters.ingredients[ingredient]
	},
	toggleDoughTypeFilter(state, action) {
		const doughType = action.payload
		state.filters.doughType[doughType] = !state.filters.doughType[doughType]
	},
	setPriceFilter(state, action) {
		state.filters.price = {
			...state.filters.price,
			...action.payload,
		}
	},
	resetFilters(state) {
		state.filters = {
			showNew: false,
			ingredients: {
				creamySauce: false,
				mozzarella: false,
				parmesanCheese: false,
				pepperoni: false,
				bacon: false,
				chicken: false,
			},
			doughType: {
				traditional: false,
				subtle: false,
			},
			price: {
				min: null,
				max: null,
			},
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchPizzas.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload || action.error.message
			})
	},
})

export const {
	toggleNewFilter,
	toggleIngredientFilter,
	toggleDoughTypeFilter,
	setPriceFilter,
	resetFilters,
} = pizzaSlice.actions
export default pizzaSlice.reducer
