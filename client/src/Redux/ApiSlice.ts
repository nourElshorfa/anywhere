import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"

export const getQuizObj : any = createAsyncThunk( "ApiSlice/getQuiz"  , async function (){
   const response = await axios.get('http://localhost:3000/api/quiz')
   return response.data
})


export const getAnnouncementObj : any = createAsyncThunk( "ApiSlice/getAnnouncement"  , async function (){
    const response = await axios.get('http://localhost:3000/api/announcement')
    return response.data
 })



const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: {

        getData : null , 
        isLoading : false , 
        isError : false
    },
    reducers: {},



    extraReducers : function(   builder  ){

        builder.addCase( getAnnouncementObj.fulfilled ,  (state , action)=> {

            // console.log(  "action" , action.payload.data[0].title );
        
            state.getData = action.payload.data ,
            state.isLoading = false , 
            state.isError = false
        }  )
        builder.addCase( getQuizObj.rejected  ,  ( )=> {

        }   )
        builder.addCase( getQuizObj.pending   ,  ( )=> {

        }   )
    }
})

export default ApiSlice.reducer
