import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Earning = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        axios.post('https://reqres.in/api/login',{
               "email": "eve.holt@reqres.in",
                "password": "cityslicka"
        })
        .then(response=>{setData(response.data)
        })
    },[])
    console.log(data);
    return (
    <>
    <div className='flex flex-col min-h-screen justify-center items-center'>
        <div className='bg-gray-400 p-6'>
                {data ? (
                    <pre className='text-white'>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading data...</p>
                )}
        </div>
    </div>
    </>
  )
}

export default Earning

