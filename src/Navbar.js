import './index.css';
import React from "react";

const Navbar = () => {
    return (  
        <nav className="navbar flex p-5 justify-between max-w-4xl place-self-center">
            <div className="">
                <h1><a href="/home">Remotify Europe</a></h1>
            </div>
            <div>
                <a href="/login">Log In</a>
                <a href="/create-job" style={{
                    color: "white",
                    backgroundColor: '#2563EB',
                    borderRadius: '8px'
                }}>Post a new job</a>
            </div>
        </nav>
    );
}
 
export default Navbar;