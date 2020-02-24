import express from "express";
import routes from "../routes";
import { videosController, uploadVideoController, videoDetailController, editVideoController, deleteVideoController } from "../controller/videoController";

const videoRouter = express.Router();

//videoRouter.get(routes.home, videosController);
videoRouter.get(routes.upload, uploadVideoController);
videoRouter.get(routes.videoDetail, videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;
