import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const getnotesall = createAsyncThunk("getnoteall",async ()=> {
    const resp = await fetch(`${process.env.REACT_APP_URL}/api/notes?populate=*`);
    const result =  resp.json();
    return result
})

let initialState={
    value:'',
  
    notesdata:[],
    loading : false,
    error : null
}
export const notesSlice = createSlice({
    name:"noteslice",
    initialState,
    reducers:{
        setdata:(state,action)=>{
            state.value = action.payload
            
        },
        settitle:(state,action)=>{
            state.title = action.payload

        },
        setcategory:(state,action)=>{
            state.category = action.payload

        },
        setwriter:(state,action)=>{
            state.writer = action.payload

        },
        setname:(state,action)=>{
            state.name = action.payload

        },
        setemail:(state,action)=>{
            state.email = action.payload


        },
        setfiles:(state,action)=>{
            state.files = action.payload

        },
        
        intSort:(state,action)=>{

            state.loading= false
            state.notesdata =  state.notesdata.data.filter((item)=> item.attributes.category ==="Interviews Notes")
   
     
        }

    },
    extraReducers :{
        [getnotesall.pending]: (state)=> {
            state.loading = true
        },
        [getnotesall.fulfilled]: (state,action)=> {
            state.loading= false
            state.notesdata = action.payload
        },
        [getnotesall.rejected]: (state,action)=> {
            state.loading = false
            state.error = action.payload
        }
        
    }
})

export const {setdata,setcategory,setemail,setfiles,setname,settitle,setwriter,intSort}= notesSlice.actions;

export default notesSlice.reducer;

