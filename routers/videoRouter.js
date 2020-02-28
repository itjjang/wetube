import express from "express";
import routes from "../routes";
import { videosController, getUploadVideoController, postUploadVideoController, videoDetailController, editVideoController, deleteVideoController } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUploadVideoController);
videoRouter.post(routes.upload, postUploadVideoController);
videoRouter.get(routes.videoDetail(), videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;
