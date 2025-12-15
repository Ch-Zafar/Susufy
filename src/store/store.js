import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/loginSlice'; 
import signalReducer from './features/signals/signalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signal:signalReducer // key "auth" matches slice
  },
});

// optional: export types for TypeScript (if needed)
export default store;