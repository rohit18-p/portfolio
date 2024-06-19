const express = require("express");
const { createProject } = require("../controllers/projectController");

const router = express.Router();

router.post("/new", createProject);

module.exports = router;
