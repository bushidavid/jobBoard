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
router.post("/postjob", async (req, res) => {
    try {
        const {jobTitle} = req.body;
        const newJob = await pool.query("INSERT INTO job(job_title) VALUES($1) RETURNING *", [jobTitle]);

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


module.exports = router;

