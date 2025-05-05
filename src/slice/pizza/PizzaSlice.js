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
