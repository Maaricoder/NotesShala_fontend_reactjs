import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";



export const getNotesdata = createAsyncThunk("getnoteuser", async()=>{
    const res = await fetch("https://noteswala.onrender.com/api/notes?populate=*");
    const result = await res.json();
    return result ;

})

export const NotesLoad = createSlice({
    name :"NotesLoad",
    initialState:{

        allnotes:[],
        loading:false,
        error:null

    },
    extraReducers : {
        [getNotesdata.pending] : (state)=>{
            state.loading = true;

        },
        [getNotesdata.fulfilled]:(state,action)=>{
            state.loading = false
            state.allnotes = action.payload
        },
        [getNotesdata.rejected] : (state,action)=>{
            state.loading= false;
            state.error = action.payload ;
        }
        

    }
})


export default NotesLoad.reducer ;