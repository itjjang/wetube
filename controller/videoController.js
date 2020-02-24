//export const homeController = (req, res) => res.send("Home");
export const homeController = (req, res) => res.render("home");
export const searchController = (req, res) => res.render("search");
//export const videosController = (req, res) => res.send("Videos");
export const uploadVideoController = (req, res) => res.render("upload");
export const videoDetailController = (req, res) => res.render("videoDetail");
export const editVideoController = (req, res) => res.render("editVideo");
export const deleteVideoController = (req, res) => res.render("deleteVideo");