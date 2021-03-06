import express from "express";
import routes from "../routes";
import { homeController, searchController } from "../controller/videoController";
import { getJoinController, postJoinController, getLoginController, postLoginController, logoutController } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinController);
globalRouter.post(routes.join, postJoinController);

globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.search, searchController);
globalRouter.get(routes.logout, logoutController);

export default globalRouter;
