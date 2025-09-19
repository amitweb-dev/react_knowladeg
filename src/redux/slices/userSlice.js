import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    forgotPasswordModal: {
      open: false,
      data: {},
    }
  },
  reducers: {
    setForgotPasswordModal: (state, action) => {
      state.forgotPasswordModal = action.payload;
    },
  },
});

export const { setForgotPasswordModal } = userSlice.actions;
export default userSlice.reducer;
