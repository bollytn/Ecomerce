import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TResponce = { id: number, title: string, prefix: string, img: string }[]


const actGetCategories = createAsyncThunk('categories/actGetCategories', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const responce = await axios.get<TResponce>('http://localhost:5005/categories')

        /* const data = responce.data.map(item => ({
             id: item.id,
             title: item.title,
             prefix: item.prefix,
             img: item.img,
         })) */

        return responce.data

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.response?.data || error.message)
        }
        return rejectWithValue('Could not get categories')
    }
})

export default actGetCategories