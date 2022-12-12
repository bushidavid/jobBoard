import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
import InputJob from './InputJob';
import JobList from "./JobList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';

function App() {
  
  const title = 'Welcome to the New Joab Board';

  return (
      <Router>
        <div className="App">
          <Navbar />

              <div className="content">
                <InputJob />
                <JobList />
              </div>

        </div>
      </Router>
  );
}

export default App;


