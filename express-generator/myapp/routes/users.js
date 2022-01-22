var express = require("express");
var router = express.Router();
let { userContrller } = require("../controller/userController");

/* GET users listing. */
router.get("/", userContrller);

module.exports = router;
