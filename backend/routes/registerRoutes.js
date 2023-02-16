const express = require("express");
const router = express.Router();
const pool = require("../db");
const registerController = require("../controllers/registerController");


// create new user
router.post("/cretenewuser", async (req, res) => {

    try {
        const user = req.body;
        const newUser = await pool.query("INSERT INTO job (email, password) VALUES($1, $2) RETURNING *", [user.email, user.password]);

        res.json(newUser);
    } catch (error) {
        console.error(error.message);
    }
})

//check if email (user) already exists
router.get("/getexistinguser/:email", async (req, res) => {

    try {
        
        const user = req.params;
        const match = await pool.query("SELECT count(*) AS found FROM sysuser WHERE email = ($1)", [user.email]);

        res.json(match);
    } catch (error) {
        console.error(error.message);
    }

})


module.exports = router;