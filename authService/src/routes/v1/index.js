const express = require("express");
const { AuthRequestValidator } = require("../../middlewares/index");

const UserController = require("../../controllers/user-controller");

const router = express.Router();

router.post(
	"/signup",
	AuthRequestValidator.validateUserAuth,
	UserController.create
);
router.post(
	"/signin",
	AuthRequestValidator.validateUserAuth,
	UserController.signin
);

router.get("/isAuthenticated", UserController.isAuthenticated);

router.get(
	"/isAdmin",
	AuthRequestValidator.validateIsAdminRequest,
	UserController.isAdmin
);

module.exports = router;
