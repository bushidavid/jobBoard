import './index.css';
import React from "react";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Remotify Europe</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#35c5f1',
                    borderRadius: '8px'
                }}>Post a new job</a>
            </div>
        </nav>
    );
}
 
export default Navbar;