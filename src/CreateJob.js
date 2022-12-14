import React, {useState, useEffect} from "react";

const CreateJob = () => {
    
    const [countries, setCountries] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [jobCountry, setJobCountry] = useState("");
    const [jobDepartment, setJobDepartment] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobSalaryRange, setJobSalaryRange] = useState("");
    const [jobExpiration, setJobExpiration] = useState();
    
    const getCountries = async () =>{
        try {
            
            const response = await fetch("http://localhost:4000/api/jobs/countries");
            const jsonData = await response.json();
            
            setCountries(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body={jobTitle};
            const response = fetch("http://localhost:4000/api/jobs/createjob", {
                method: "POST",
                headers: {"Content-Type": "application/json"}
            });

            window.location("/api/jobs");
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=> {
        getCountries();
    }, []);

    
    return (
        <form onSubmit={onSubmitForm}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Department</label>
                <select className="form-control" id="exampleFormControlSelect1" value={jobDepartment} onChange={(e) => setJobDepartment(e.target.value)}>
                    <option>Logistics</option>
                    <option>IT</option>
                    <option>Software Development</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Remotly From</label>
                <select multiple className="form-control" id="exampleFormControlSelect2" value={jobCountry} onChange={(e) => setJobCountry(e.target.value)}>
                    {
                        countries.map(country => (
                            <option>{country.country_name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Job Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Job Description Here..." value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Salary Range</label>
                
            </div>
            <div className="form-group">
                <label for="valid_to">Job Post Valid Until...</label> 
                <input type="date" id="valid_to" className="form-control" name="valid_to" value={jobExpiration} onChange={(e) => (e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default CreateJob;