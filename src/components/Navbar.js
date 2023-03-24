import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const  Navbar=(props)=>{


  
        return (
            <>

                <header className="text-gray-600 body-font bg-gradient-to-r from-sky-400 to-blue-500">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link onClick={()=>props.alldata()} to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img className='h-10' src='http://store-images.s-microsoft.com/image/apps.60084.13914979749842905.9c677d6d-da11-477f-bc18-b44258890dc0.3d2ee498-68ca-4542-93cb-ffe2464d31c5'></img>
                            <Link to="/"><span className="ml-3 text-xl cursor-pointer">NotesWala</span></Link>
                        </Link>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link onClick={()=>props.alldata()} to="/"> <a  className="mr-5 hover:text-gray-900 cursor-pointer md:text-lg md:font-medium text-white   ">Home</a></Link>
                            <Link to="/upload" className="mr-5 md:mr-8  hover:text-gray-900 cursor-pointer md:text-lg md:font-medium  text-white ">Upload Your Notes</Link>
                            <Link to="/admin_login" className=" underline hover:underline-offset-4 mr-5 md:mr-8  hover:text-gray-900 cursor-pointer md:text-lg md:font-medium  text-white ">Admin Login</Link>

                        </nav>


                    </div>
                </header>

            </>
        );
    
}
 
export default Navbar;
