import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface IBasketItem{
    image: string,
    title: string,
    coast: string,
    value: number
}

interface IBasketState {
   items: IBasketItem[]
}

// Define the initial state using that type
const initialState: IBasketState = {
    items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
        add:(state,action:PayloadAction<any>)=>{
            state.items += action.payload
        },
        deleteOne: (state, action:PayloadAction<any>)=>{
            state.items = state.items.filter((el)=> el!=action.payload.title)
        }
  },
})

export const { add , deleteOne } = basketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user

export default basketSlice.reducer