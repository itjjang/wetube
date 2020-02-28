import routes from "../routes";

export const getJoinController = (req, res) => {
    res.render("join", { pageTitle: "Join" });
}

export const postJoinController = (req, res) => {
    const { body: { name, email, password, password2 } } = req;

    if(password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To Do: Log User In
        res.redirect(routes.home);
    }
}


export const loginController = (req, res) => res.render("login", { pageTitle: "Login" });
export const logoutController = (req, res) => res.render("logout", { pageTitle: "Logout" });
//export const usersController = (req, res) => res.render("Users");
export const userDetailController = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfileController = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePasswordController = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
