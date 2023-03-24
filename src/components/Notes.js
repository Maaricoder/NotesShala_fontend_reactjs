import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import SearchResults from 'react-filter-search';
import { useSelector,useDispatch } from 'react-redux';
import { getnotesall } from '../redux/noteSlice';







function Notes(props) {



    let dispach = useDispatch()

   let data = props.data
   console.log("from notes jss",data)
    let inputvalue= useSelector(state=>state.inputvalue.value)
    let loading = useSelector(state=>state.inputvalue.loading)
    
  
   




   

  




    // setdata(storedata.notesdata.data)


 
    return (
        <>

        {/* consditional renderig start here */}

           {
              
              (props.loading ===false) ?

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-16 mx-auto ">
                            <div className="flex flex-wrap -m-4">
                            {

                           
                              <SearchResults
                                 value={inputvalue}
                                  data={data} 
                                  renderResults={result => (

                                    result.map((item, index) => {
                                        return <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer ">
                                            <Link to={`/notes/${item.id}`} ><a className="block relative h-48 lg:w-auto rounded overflow-hidden">
                                                {
                                                    // console.log(url + item.attributes.img.data.attributes.url)
                                                }
                                                <img alt="ecommerce" className="object-cover  object-center w-full h-full block" src={item.attributes.image.data[0].attributes.url} />
                                            </a> </Link>
                                            <div className="mt-4   ">
                                                <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1 ">{item.attributes.category}</h3>
                                                <h2 className="text-gray-100 title-font text-lg font-medium">{item.attributes.title}</h2>
                                                <h2 className="text-gray-100 title-font text-lg font-medium mb-2">

                                                    <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out"
                                                        data-bs-toggle="tooltip" title={`Credit goes to  `}>Notes By: {item.attributes.writer}</a>

                                                </h2>

                                                <a className='text-white  bg-blue-500 py-1 px-2 flex flex-col justify-center   ' href={item.attributes.file.data[0].attributes.url} download ><button className='text-center'>Download</button></a>
                                            </div>
                                        </div>
                                    })
                                )} /> 

                               
                            
                            }   


                            </div>
                        </div>
                    </section>

                    : <Loader></Loader>
            }     

        </>
    );

}




export default Notes;
