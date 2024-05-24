const { createSlice } = require("@reduxjs/toolkit")
const initialState={
    todos:[]
}

const Slice =createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        addtodolist:(state,action)=>{
            const data={
                id:nanoid,
                name: action.payload,

            }
            state.todos.push(data);
        }
    }

})
export const {addtodolist}=Slice.actions
export default Slice.reducer