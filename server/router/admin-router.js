const express = require("express");
const adminController = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware,adminController.getAllUsers);
router.route("/contact").get(authMiddleware,adminController.getContacts);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteUserById);

router.route("/users/:id").get(authMiddleware,adminMiddleware, adminController.getUserById);


router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
.route("/contacts")
.get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;