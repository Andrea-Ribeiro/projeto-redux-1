import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        id: 1,
        name: "Andrea Ribeiro",
        email: "teste@andrea.com",
        address: null,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{}
})

export default userSlice.reducer;