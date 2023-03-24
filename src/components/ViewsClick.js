// import "./styles.css";
import { useEffect, useState, useRef } from "react";
import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { Link, useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'



export default function ViewsClick() {


  const { id } = useParams()
  console.log("id is ",id)
  const [isLoading, setisLoading] = useState(true);
  const [newdata, setnewdata] = useState([]);

  let url = process.env.REACT_APP_URL


  useEffect(() => {

    const fatdata = async () => {
      let resp = await fetch(`${process.env.REACT_APP_URL}/api/notes/${id}?populate=*`)
        .then(res => res.json())
        // .then(res=>console.log(`this data from new`,res.data))
        .then(res => setnewdata([res.data]))

        console.log("it new data",newdata)

      // console.log(process.env.REACT_APP_URL)
      setisLoading(false)
    }

    fatdata()

  }, []);

  console.log("hello from clickviews",newdata)

  return (
    <>




       {

        (isLoading === true) ? <div className="flex justify-center  h-screen"> <Spinner
          // style={{display:"flex",justifyContent:"center"}}
          style={{ margin: "auto" }}
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> </div> :

          newdata.map((item) => {
            return <div key={item.id} className="main lg:h-11/12  flex-col flex justify-around lg:flex lg:flex-row    py-5 lg:py-5 lg:justify-evenly">


              <div className="pdf-reader lg:w-2/3  lg:ml-20 md:mx-auto" >

                <DocViewer style={{ width: "auto", height: 500 }} documents={[{ uri: item.attributes.file.data[0].attributes.url }]} pluginRenderers={DocViewerRenderers}></DocViewer>

              </div>

              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                <h2 className="title-font trackineWidest text-sm text-gray-400">{item.attributes.category}</h2>
                <h1 className="title-font mb-1 text-3xl font-medium text-gray-200">{item.attributes.title}</h1>
                <div className="mb-4 flex">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="ml-3 text-gray-600">4 Reviews</span>
                  </span>
                  <span className="borderL-2 space-x-2s ml-3 flex border-gray-200 py-2 pl-3">
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed text-gray-400">Donwlaod Note Click On Button distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <hr className="mt-2" />

                <div className="flex justify-center">
                  <Link href={ item.attributes.file.data[0].attributes.url } download className="texeWhite flex rounded border-0 bg-indigo-500 py-2 lg:px-10 px-6 hover:bg-indigo-600 focus:outline-none mt-2" >Download</Link>
                </div>
              </div>


            </div>
          })
      } 



    </>
  );
}
