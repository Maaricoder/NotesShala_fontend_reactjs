import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";



function Views() {



    const [newdata, setnewdata] = useState([])
    let url = process.env.REACT_APP_URL;

    const { id } = useParams();

    useEffect(() => {
        const fetchDataById = async () => {

            let resp = axios.get(`http://localhost:1337/api/notes/${id}?populate=*`)
                .then(res => setnewdata([res.data]))

        }

        fetchDataById();

    }, []);


    console.log(newdata)


  


    return (
        <>
{/* 
            {
                newdata.map((item) => {
                    return <div className="main lg:h-11/12  flex-col flex justify-around lg:flex lg:flex-row    py-5 lg:py-5 lg:justify-evenly">


                        <div className="pdf-reader lg:w-2/3  lg:ml-20 md:mx-auto" >

                            <DocViewer style={{ width: "auto", height: 500 }} documents={[{ uri: url + item.attributes.files.data.attributes.url }]} pluginRenderers={DocViewerRenderers}></DocViewer>
                           
                        </div>
                        <div className="container-data flex flex-col justify-center items-center">
                            <div className="first section-name-writer mt-5">
                                <h2 class="text-sm title-font text-gray-300 tracking-widest">{item.attributes.name}</h2>
                                <h1 class="text-gray-200 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                                <div class="flex mb-4">
                                    <span class="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span class="text-gray-600 ml-3">4 Reviews</span>
                                    </span>
                                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>

                            </div>
                            <div className="second-section-para lg:w-1/2">
                                <p class="leading-relaxed text-gray-300 mx-2 md:mx-10">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            </div>
                            <div className="btn  px-20 py-2  bg-blue-500 mt-1"><a href={url + item.attributes.files.data.attributes.url} download>Download Note</a></div>
                        </div>
                    </div>
                })
            } */}

        </>
    )
}

export default Views
