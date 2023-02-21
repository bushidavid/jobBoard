import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (  
        <div className="flex p-5 justify-between max-w-4xl w-full place-self-center">
            <div className="">
                <Link href="/">Remotify Europe</Link>
            </div>
            <div>
                <Link href="/components/CreateJob">Post a new job</Link>
            </div>
        </div>
    );
}
 
export default Navbar;