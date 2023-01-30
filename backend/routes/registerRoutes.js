const express = require("express");
const router = express.Router();
const pool = require("../db");
const registerController = require("../controllers/registerController");


// create new user
router.post("/", async (req, res) => {

    try {
        const user = req.body;
        //const newUser = await pool.query() VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *", [job.jobTitle, job.jobDepartment, job.selectedCountries, job.jobDescription, job.salaryMin, job.salaryMax, job.worldwide, job,currency, job.company, job.compDescription, job.candidateLevel]);

        res.json({'message' : 'new api to create a new user'});
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;