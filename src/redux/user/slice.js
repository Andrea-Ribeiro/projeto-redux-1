import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    users: []
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
        },
        deleteAddress: (state) => {
            return{
                ...state,
                user:{
                    ...state.user,
                    address: null,
                }
            }

        },
        fetchUsers: (state) => {
            alert("CHAMOU O FETCH USERS")
        }

    }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers } = userSlice.actions;

export default userSlice.reducer;