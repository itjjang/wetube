import express from "express";
import routes from "../routes";
import { videosController, getUploadVideoController, postUploadVideoController, videoDetailController, getEditVideoController, postEditVideoController, deleteVideoController } from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUploadVideoController);
videoRouter.post(routes.upload, uploadVideo, postUploadVideoController);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetailController);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideoController);
videoRouter.post(routes.editVideo(), postEditVideoController);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideoController);

export default videoRouter;
