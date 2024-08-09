import React, { useState,useEffect } from 'react'
import axios from 'axios';

const WorkStreams = () => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios.put('https://reqres.in/api/users/2?page=',{
            'first_name':'Varshini',
            'last_name':'Mukkamalla',
            'email':'varshinimukkamalla@gmail.com'
        })
        .then(response=>setData(response.data))
        .catch(error => {
            console.error('Error fetching data:', error);
            setData(null);
        }); 
    },[])
    console.log(data);
  return (
    <>
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='bg-gray-400 p-5 '>
        {data ? (
                    <div className='bg-white p-3'>
                        <p>First Name: {data.first_name}</p>
                        <p>Last Name: {data.last_name}</p>
                        <p>Email: {data.email}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
        </div>
    </div>
    </>
  )
}

export default WorkStreams
