import express from "express";
import routes from "../routes";
import { usersController, userDetailController, editProfileController, changePasswordController } from "../controller/userController";

const userRouter = express.Router();

//userRouter.get(routes.home, usersController);
userRouter.get(routes.userDetail, userDetailController);
userRouter.get(routes.userProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);

export default userRouter;
