import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Tony", email: "otokares4uonly@gmail.com" },
    { id: 2, name: "John", email: "otokares4uonly@gmail.com" },
  ];

  const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
  })

  export default userSlice.reducer;