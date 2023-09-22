import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import agenceReducer from "./slices/agenceSlice";
<<<<<<< HEAD
=======
import userListReducer from "./slices/userListSlice";
>>>>>>> 9221dbe (commit 9)
export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    agences: agenceReducer,
<<<<<<< HEAD
=======
    userList: userListReducer,
>>>>>>> 9221dbe (commit 9)
  },
});
