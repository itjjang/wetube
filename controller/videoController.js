import routes from "../routes";
import Video from "../models/Video";

// Home
export const homeController = async(req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos });
    } catch(error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }    
}

// Search
export const searchController = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    let videos = [];
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" }});
    } catch(error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}

// Upload
export const getUploadVideoController = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUploadVideoController = async(req, res) => {
    const { body: { title, description }, file: { path } } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });    
    res.redirect(routes.videoDetail(newVideo.id));
}

// Video Detail
export const videoDetailController = async(req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);    
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }    
}

// Edit Video
export const getEditVideoController = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch(error) {
        console.log(error);
    }    
}

export const postEditVideoController = async (req, res) => {
    const { params: { id }, body: { title, description } } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

// Delete Video
export const deleteVideoController = async (req, res) => {
    const { params: { id } } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch(error) {
        console.log(error);
    }
    res.redirect(routes.home);    
}
