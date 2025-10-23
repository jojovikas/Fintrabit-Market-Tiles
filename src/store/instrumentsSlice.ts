import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInstruments } from "../api/instrumentsService";
import type { Instrument } from "../types/types";

export const loadInstruments = createAsyncThunk(
  "instruments/load",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchInstruments();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

interface InstrumentsState {
  list: Instrument[];
  loading: boolean;
  error: string | null;
}

const initialState: InstrumentsState = {
  list: [],
  loading: false,
  error: null,
};

const instrumentsSlice = createSlice({
  name: "instruments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadInstruments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadInstruments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadInstruments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default instrumentsSlice.reducer;
