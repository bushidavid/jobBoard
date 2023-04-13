CREATE DATABASE jobboard;

CREATE TABLE job(
    job_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)