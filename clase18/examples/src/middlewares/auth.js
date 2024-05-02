export const auth = function (req, res, next) {
    const {username, password} = req.query;

    if(username !== "Edgar" || password !== "Coder2024"){
        return res.send("Login Failed!");
    }

    req.session.user = username;
    req.session.admin = true;

    return next();
}