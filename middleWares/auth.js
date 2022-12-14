const jwt = require("jsonwebtoken");



// function middleware  that checks Token
exports.auth = async(req, res, next) => {
    let token = req.header("x-api-key")
    if (!token) {
        return res.status(401).json({ msg: "You need to send token to this endpoint url 2222" })
    }
    try {

        let tokenData = jwt.verify(token, "MonkeysSecret");

        req.tokenData = tokenData

        next()
    } catch (err) {
        return res.status(401).json({ msg: "Token not valid or expired 22222" })
    }
}