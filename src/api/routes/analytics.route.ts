const express = require("express");
const router = express.Router();

import { getTestCard } from "../controllers/analytics.controller";

router.get("/", getTestCard);

module.exports = router;