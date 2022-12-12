import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
import InputJob from './InputJob';
import JobList from "./JobList";

function App() {
  
  const title = 'Welcome to the New Joab Board';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <InputJob />
        <JobList />
      </div>
    </div>
  );
}

export default App;


