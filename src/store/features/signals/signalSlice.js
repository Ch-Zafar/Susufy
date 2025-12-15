import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk
export const fetchSignals = createAsyncThunk(
    "signal/fetchSignals",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/signal/getSignals", {
                withCredentials: true,
            });
            console.log("Fetched signals:", res.data); // ✅ prints actual array content
            return res.data; // this will become the payload in fulfilled reducer
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const signalSlice = createSlice({
    name: "signal",
    initialState: {
        finalSignal: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignals.pending, (state) => {
                state.status = true;
            })
            .addCase(fetchSignals.fulfilled, (state, action) => {
                state.status = false;
                state.finalSignal = action.payload; // store the array here
                console.log("Signals in state:", state.finalSignal)
            }) 
            .addCase(fetchSignals.rejected, (state, action) => {
                    state.status = false;
                    state.error = action.payload;
                });
    },
});

export default signalSlice.reducer;
