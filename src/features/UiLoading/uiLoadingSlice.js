import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  loading: false,
};

const name = 'UiLoading';

export const UiLoading = createSlice({
  name,
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hiddenLoading: (state) => {
        state.loading = false;
    },
  },
});

export const { showLoading, hiddenLoading } = UiLoading.actions


export default UiLoading.reducer