import { configureStore } from "@reduxjs/toolkit";
import theme from "./redux/theme";

export default configureStore({
  reducer: {
    theme: theme
  }
});
