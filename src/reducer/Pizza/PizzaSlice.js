import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://new-pizza-api.p.rapidapi.com/Pizzas'
const API_OPTIONS = {
	headers: {
		'x-rapidapi-key': 'c154095132msh1f19d4083626a87p13c3c6jsnd77af1decac3',
		'x-rapidapi-host': 'new-pizza-api.p.rapidapi.com',
	},
}

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzas',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(API_URL, API_OPTIONS)
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
	},
	reducers: {},
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

export default pizzaSlice.reducer
