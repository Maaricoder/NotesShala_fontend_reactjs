import React, { Component,useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Notes from './components/Notes';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
// import Notesviews from './components/Notesviews';
import Views from './components/Views';
import Example from "./components/ViewsClick"
import Upload from './components/Upload';
import Login from './components/Login';

const  App =()=>{

  const [data, setdata] = useState([]);
  const [dummydata,setdummydata] = useState([])
  const [loading, setloading] = useState(true);

  const fetchdata=async()=>{
    const resp = await fetch(`${process.env.REACT_APP_URL}/api/notes?populate=*`);
    const result = await resp.json();
    setloading(false)
    setdata(result.data)
    setdummydata(result.data)
  }

  useEffect(() => {

    fetchdata()
    
  }, []);


  // filter function 
  console.log("it dummy",dummydata)

  const filterdata = ()=> {
    let filterdata = dummydata.filter(item=> item.attributes.category ==="Interviews Notes")
    setloading(false)
    return setdata(filterdata)
  

  }

  // all data get fuction 
  const getalldata=async()=>{
    const resp = await fetch(`${process.env.REACT_APP_URL}/api/notes?populate=*`);
    const result = await resp.json();
    setloading(false)
    setdata(result.data)
  }

  // filterata with dsa notes

  const dsafilter= () =>{
    let dsadata = dummydata.filter(item=>item.attributes.category ==="dsa")
    setloading(false)
    return setdata(dsadata)
  }

  // filterdata with programming 

  const filterProgramming=()=>{
    let programmingdataFilter = dummydata.filter(item=>item.attributes.category ==="Programming Notes")
    setloading(false)
    return setdata(programmingdataFilter)
  }

  const alldata=()=>{
    let allnotesdata = dummydata
    setloading(false)
    setdata(allnotesdata)
  }



console.log("setdata",data)

    return (
      <div className=' bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black '>



        <Navbar getalldata={getalldata} alldata={alldata} ></Navbar>
        {/* <Example></Example> */}

        <Routes>

          <Route path='/' element={<React.Fragment><Slider intfilter={filterdata} loading={loading} data={data} dsafilter={dsafilter} filterProgramming={filterProgramming} alldata={alldata} ></Slider><Notes data={data} loading={loading} ></Notes> </React.Fragment>}></Route>

          <Route path='/notes' element={<Notes data={data} loading={loading} ></Notes>} />
          <Route path='/notes/:id' element={<Example></Example>}></Route>
          <Route path='/upload' element={<Upload></Upload>}></Route>
          <Route path='/admin_login' element={<Login></Login>}></Route>
          {/* <Route path=''></Route> */}

        </Routes>
        <Footer></Footer>



      </div>
    );
  }


export default App;
