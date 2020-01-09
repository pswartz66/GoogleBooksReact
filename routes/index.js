const path = require("path");
const router = require("express").Router();
const APIRoutes = require("./api");

// API Routes
router.use("/api", APIRoutes);

// If no API routes are hit, default to the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;