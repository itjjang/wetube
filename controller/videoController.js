//export const homeController = (req, res) => res.send("Home");
export const homeController = (req, res) => res.render("home");
export const searchController = (req, res) => res.send("Search");
export const videosController = (req, res) => res.send("Videos");
export const uploadVideoController = (req, res) => res.send("Video Upload");
export const videoDetailController = (req, res) => res.send("Video Detail");
export const editVideoController = (req, res) => res.send("Edit Video");
export const deleteVideoController = (req, res) => res.send("Delete Video");