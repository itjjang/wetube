import express from "express";
import routes from "../routes";
import { userDetailController, editProfileController, changePasswordController } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.userProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
