//export const homeController = (req, res) => res.send("Home");
export const homeController = (req, res) => res.render("home", { pageTitle: "Home" });
export const searchController = (req, res) => res.render("search", { pageTitle: "Search" });
//export const videosController = (req, res) => res.send("Videos");
export const uploadVideoController = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetailController = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideoController = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideoController = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });