export const joinController = (req, res) => res.render("join", { pageTitle: "Join" });
export const loginController = (req, res) => res.render("login", { pageTitle: "Login" });
export const logoutController = (req, res) => res.render("logout", { pageTitle: "Logout" });
//export const usersController = (req, res) => res.render("Users");
export const userDetailController = (req, res) => res.send("userDetail", { pageTitle: "User Detail" });
export const editProfileController = (req, res) => res.send("editProfile", { pageTitle: "Edit Profile" });
export const changePasswordController = (req, res) => res.send("changePassword", { pageTitle: "Change Password" });
