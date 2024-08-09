import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WorkOffers = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(response=>setData(response.data.data))
        .catch(error => setData('Error fetching data:', error));
    },[])

  return (
    <>
    <div className='flex flex-col min-h-screen justify-center items-center'>
        <div className='bg-gray-400 p-6 justify-center'>
                <table className='min-w-full bg-white border border-gray-300'>
                        <thead>
                            <tr>
                                <th className='py-2 px-4 border-b'>ID</th>
                                <th className='py-2 px-4 border-b'>First Name</th>
                                <th className='py-2 px-4 border-b'>Last Name</th>
                                <th className='py-2 px-4 border-b'>Email</th>
                                <th className='py-2 px-4 border-b'>Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td className='py-2 px-4 border-b'>{item.id}</td>
                                    <td className='py-2 px-4 border-b'>{item.first_name}</td>
                                    <td className='py-2 px-4 border-b'>{item.last_name}</td>
                                    <td className='py-2 px-4 border-b'>{item.email}</td>
                                    <td className='py-2 px-4 border-b'>
                                        <img src={item.avatar} alt='avtar' className='w-12 h-12 rounded-full' />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    </div>
    </>
  )
}

export default WorkOffers;
