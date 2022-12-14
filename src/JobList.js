import {React, Fragment, useEffect, useState} from "react";

const JobList = (props) => {

    const [jobs, setJobs] = useState([]);
    
    const getJobs = async () =>{
        try {
            
            const response = await fetch("http://localhost:4000/api/jobs/alljobs");
            const jsonData = await response.json();
            
            setJobs(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=> {
        getJobs();
    }, []);

    return ( 
        <Fragment>
            <div>
                <h1>Available Jobs</h1>     
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Description</th>
                        <th>Remotly From</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => (
                                <tr>
                                    <td>{job.job_title}</td>
                                    <td>{job.description}</td>
                                    <td>{job.location}</td>
                                    <td><button className="btn btn-success">Apply</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>

);
}
 
export default JobList;