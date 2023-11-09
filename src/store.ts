import { configureStore } from '@reduxjs/toolkit'
import materialReducer from './features/material/materialSlice'

// Take a look in FLUX for multiple stores.
// The is also an angular service-like approach possible.

export const store = configureStore({
    reducer: {
        materials: materialReducer
    },
})
// https://redux-toolkit.js.org/tutorials/quick-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch