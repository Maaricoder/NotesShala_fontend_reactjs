import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settitle, setcategory, setfiles, setemail, setname, setwriter } from '../redux/noteSlice';
import axios from 'axios';
import { fireEvent } from '@testing-library/react';
// import { fireEvent } from '@testing-library/react';

function Upload() {

  let dispatch = useDispatch()

  let value = useSelector(state => state.inputvalue)

  const inputRef = useRef()
  const [submited, setsubmited] = useState(false);
  const [fileid, setfileid] = useState("");
  const [newfile, setnewfile] = useState(null);
  const [input, setinput] = useState({

    title: "",
    
    writer: "",
    person: "",
    email: "",
    


  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setinput({
      ...input,
      [name]: value
    })

  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, writer, category, person, email, } = input

    
    console.log("handlesubmit called")



    let filedata = new FormData();


    filedata.append("files", newfile);
    filedata.append("ref", 'api::event.event')

    let resp = await axios.post(`${process.env.REACT_APP_URL}/api/notes-uploads`, filedata)
      .then((res) => {
        const value = res.data[0].id
        // setfileid(value)
        console.log("fileid", value)

        axios.post(
          `${process.env.REACT_APP_URL}/api/upload-notes`,
          {
            data: {
              title: title,
              writer: writer,
              category: category,
              person: person,
              email: email,
              // attachments: fileId,
              fileid: parseInt(value)
            }
          }
        ).then((res) => {


          console.log(res)
        })
          .catch(err => console.log(err))


      })

    console.log(fileid)

    setinput({
      ...input,
      title: "",
      writer: "",
      category: "",
      person: "",
      email: ""

    })

    setfileid("")
    setnewfile("")

    setsubmited(true)

    setTimeout(() => {

      setsubmited(false)


    }, 4000);






   

  }




  return (
    <>



      <form onSubmit={handleSubmit} className='h-screen mt-20 mx-20 border-box lg:mx-80 '>
        <h1 className='text-center text-white text-2xl '>Help Student ! Uplaod Your Notes</h1>
        <div className="relative z-0 w-full mb-6 group ">
          <input type="text" onChange={handleInput} value={input.title} name="title" id="floating_email" className=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={handleInput} value={input.category} name="category" id="floating_password" className=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={handleInput} value={input.writer} name="writer" id="floating_repeat_password" className=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Writer</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">Name
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" onChange={handleInput} value={input.person} name="person" id="floating_first_name" className=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name (Uplaoder name)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="email" onChange={handleInput} value={input.email} name="email" id="floating_last_name" className=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email (Uploader email)</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">

          <div className="relative z-0 w-full mb-6 group">
            <input ref={inputRef} type="file" onChange={() => setnewfile(inputRef.current.files[0])} name="files" id="floating_company" class=" pl-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Only pdf recommeded" required />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Only pdf recommeded ( Less Then 10MB ) </label>
          </div>
        </div>
        {submited ? < ><h1 className=' inline text-center text-green-500'> Data Submited Successfully. </h1> <span className='inline-flex font-semibold text-yellow-600 text-center' > THANK RESPECT+++</span>  </> : ""}
        <div className='flex justify-center py-5'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>



    </>
  )
}

export default Upload
