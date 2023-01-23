import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
import InputJob from './InputJob';
import JobList from "./JobList";
import Register from "./Register";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';
import CreateJob from './CreateJob';

function App() {
  
  const title = 'Welcome to the New Joab Board';

  return (
      <Router>
        <div className="App">
          <Navbar />
              <div className="content h-screen w-screen">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/create-job" element={<CreateJob />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
        </div>
      </Router>
  );
}

export default App;


