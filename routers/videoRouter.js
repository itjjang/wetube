import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home,      (req, res) => res.send("Videos"));
videoRouter.get(routes.upload,      (req, res) => res.send("VideoUpload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("VideoDetail"));
videoRouter.get(routes.editVideo,   (req, res) => res.send("VideoEdit"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("VideoDelete"));

export default videoRouter;
