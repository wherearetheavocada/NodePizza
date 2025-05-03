import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const basketSlice = createSlice({
	name: 'favorites',
	initialState,
	reducer: {
		toggleBasket: (state, { payload: pizza }) => {
			const isExist = state.some(r => r.id === pizza.id)
			if (isExist) state = state.filter(r => r.id !== pizza.id)
			else state.push(pizza)
		},
	},
})

export const { action, reducer } = basketSlice
