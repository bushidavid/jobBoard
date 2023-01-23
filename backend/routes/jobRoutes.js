const express = require("express");
const router = express.Router();
const pool = require("../db");


// routes
// get all jobs
router.get('/alljobs', async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT * FROM job");
        res.json(allJobs.rows)

    } catch (error) {
        console.error(error.message);
    }
})

// GET a single job
router.get('/job/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const job = await pool.query("SELECT * FROM job WHERE job_id = $1 ", [id]);
        res.json(job.rows)

    } catch (error) {
        console.error(error.message);
    }
})

// create a job
router.post("/createjob", async (req, res) => {
    try {
        const {job} = req.body;
        const newJob = await pool.query("INSERT INTO job(job_title, job_department, country_id, description, expiration_date) VALUES($1, $2, $3, $4, $5) RETURNING *", [job.job_title, job.job_department, job.country_id, job.description, job.expiration_date]);

        res.json(newJob.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// update a job
router.patch("/updatejob/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateJob = await pool.query("UPDATE job SET description = $1 WHERE job_id = $2", [description, id]);

        res.json(updateJob.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// delete a job
router.delete("/deletejob/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteJob = await pool.query("DELETE FROM job WHERE job_id = $1", [id]);

        res.json(deleteJob.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// get all countries
router.get("/countries", async (req, res) => {

    try {
        const allCountries = await pool.query("SELECT * FROM countries");
        res.json(allCountries.rows)

    } catch (error) {
        console.error(error.message);
    }

})

// //create new user
// router.post("/newuser", async (req, res) => {
//     try {
//         const {user} = req.body;
//         const newUser = await pool.query("INSERT INTO users(user_name, email, password, is_candidate, is_recruiter) VALUES($1, $2, $3, $4, $5) RETURNING *", [user.user_name, user.email, user.password, user.candidate, user.recruiter]);

//         res.json(newUser.rows);
//     } catch (error) {
//         console.error(error.message);
//     }
// })


module.exports = router;

