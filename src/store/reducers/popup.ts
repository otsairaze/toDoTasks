import { createSlice } from "@reduxjs/toolkit";

type IPopup = {
  open: boolean;
  value: number;
};

const initialState: IPopup = {
  open: false,
  value: 0,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setOpen, setValue } = popupSlice.actions;
export default popupSlice.reducer;
