import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        createUser: (state, action) => {
            console.log(action.payload);

            return {
                ...state,
                user:{
                    ...action.payload,
                    address: null,
                }
            }
        },

        logoutUser: (state) => {
            return{
                ...state,
                user: null,
            }
        },
        
        addAddress: (state, action) => {
            return{
                ...state,
                user: {
                    ...state.user,
                    address:{
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        }
    }
})

export const { createUser, logoutUser, addAddress } = userSlice.actions;

export default userSlice.reducer;