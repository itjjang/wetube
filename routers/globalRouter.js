import express from "express";
import routes from "../routes";
import { homeController, searchController } from "../controller/videoController";
import { joinController, loginController, logoutController } from "../controller/userController";


const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.search, searchController);
globalRouter.get(routes.join, joinController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.logout, logoutController);

export default globalRouter;
