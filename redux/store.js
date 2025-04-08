import { configureStore } from "@reduxjs/toolkit";
import filterItem from "./feature/filterslice";

export const store = configureStore({
  reducer: { fil: filterItem },
});
