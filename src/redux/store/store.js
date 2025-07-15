import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../slices/sideBarSlice";

export default configureStore({
  reducer: {
    handleShowSideBar: sideBarReducer,
  },
});
