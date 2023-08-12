const router = require('express').Router();

const {mail} = require("../controller/mailController")


router.post('/mail', mail);


module.exports = router;