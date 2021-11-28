const db = require('./../context/contextManager');
const jwt = require('jsonwebtoken');
let _userController = {};

/**
 * 
 * @param {*} first_name 
 * @param middle_name
 * @param {*} last_name
 * @param {*} email
 * @param {*} password
 * @param {*} role 
 */
_userController.registration = async function (req, res) {
    try {
        await db.userModel.create({
            first_name: req.body.firstname,
            middle_name: req.body.middlename,
            last_name: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            role: "user"
        })

        res.send({
            status: 200
        })
    } catch (error) {
        console.log("User Controller || Registration Controller", error);
    }
}


/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
_userController.login = async function (req, res) {
    try {
        console.log("Params: ", req.body)

        const findUser = await db.userModel.findOne({ email: req.body.email, password: req.body.password });

        if (!findUser) {
            return res.send({
                status: 401,
                message: "User not found. Please try with valid credentials."
            })
        }

        const token = jwt.sign({ id: req.body.email }, "provideyourprivatekey");

        return res.send({
            status: 200,
            token: token
        })
    } catch (error) {
        console.log("User Controller || Login Controller", error);
    }
}



module.exports = _userController;