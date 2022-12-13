import React, {useState, useEffect} from "react";

const CreateJob = () => {
    
    const [countries, setCountries] = useState([]);
    
    const getCountries = async () =>{
        try {
            
            const response = await fetch("http://localhost:4000/api/jobs/countries");
            const jsonData = await response.json();
            
            setCountries(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=> {
        getCountries();
    }, []);

    
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Job Title" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Department</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>Logistics</option>
                    <option>IT</option>
                    <option>Software Development</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Remotly From:</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                    {
                        countries.map(country => (
                            <option>{country.country_name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Job Description </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Job Description Here..." />
            </div>
        </form>
    );
}
 
export default CreateJob;