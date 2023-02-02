const express = require("express");
const router = express.Router();
const pool = require("../db");
const registerController = require("../controllers/registerController");


// create new user
router.post("/", async (req, res) => {

    try {
        const user = req.body;
        const newUser = await pool.query("INSERT INTO job (name, surname, email, password, is_candidate, is_recruiter) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *", [user.name, user.surname, user.email, user.password, user.is_candidate, user.is_recruiter]);

        res.json(newUser);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;