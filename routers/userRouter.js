import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home,           (req, res) => res.send("Users"));
userRouter.get(routes.userDetail,     (req, res) => res.send("UserDetail"));
userRouter.get(routes.userProfile,    (req, res) => res.send("UserProfile"));
userRouter.get(routes.changePassword, (req, res) => res.send("UserChangePassword"));

export default userRouter;
