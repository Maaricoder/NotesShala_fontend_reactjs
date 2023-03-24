import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setdata,intSort} from "../redux/noteSlice"






function Slider(props) {


            // local state to store input value 
            
    const [value, setvalue] = useState('');
  
    const dispach = useDispatch()



// sending inputvalue to Redux store  
    dispach(setdata(value))


   
// handle handleInterviewsNotes function 

    return (
        <div className=' '>
            <div className='heading flex justify-center mt-5  '>
                <h1 className=' bg-green-600 cursor-pointer  text-center py-2 px-3 mt-7 mb-5 heading text-lg font-semibold text-white rounded-sm'> Handwriting Coding Note Solutions</h1>
            </div>
            <div className='inputs flex justify-center mt-5'>

                <form className=' w-1/2  md:w-1/3'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidht="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(e) => setvalue(e.target.value)} value={value} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Notes" required />
                        {/* <button type="submit"  className="md:text-white sm:h-5 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                    </div>
                </form>

            </div>
            <div className=' flex flex-col md:flex-row justify-center mt-5'>
                <button onClick={()=>props.alldata()} type="button" className="focus:outline-none text-white mx-2  bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-800 active:bg-blue-500  hover:bg-blue-500 ">All Notes</button>
                <button onClick={()=>props.filterProgramming()} type="button" className="focus:outline-none text-white mx-2  bg-green-500  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-blue-500 dark:focus:ring-green-800 active:bg-blue-500  hover:bg-blue-500  ">Programming Notes</button>
                <button onClick={()=>props.intfilter()} type="button" className="focus:outline-none text-white mx-2  bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:focus:ring-green-800 hover:bg-blue-500 active:bg-blue-500 ">Interviews Notes</button>
                <button onClick={()=>props.dsafilter()} type="button" className="focus:outline-none text-white mx-2  bg-green-700  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600  dark:focus:ring-green-800 active:bg-blue-500  hover:bg-blue-500">DSA Notes</button>



            </div>


        </div>
    );

}

export default Slider;
