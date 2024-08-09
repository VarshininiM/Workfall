import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const TableData = () => {
    const [dataList, setDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('registrationData')) || [];
        setDataList(storedData);
    }, []);

    const handleEdit = (index) => {
        localStorage.setItem('editIndex', index);
        navigate('/clients');
        // navigate('/registrationform', { state: { editIndex: index, data: dataList[index] } });
    };

    // const handleDelete = (index) => {
    //     const updatedDataList = dataList.filter((_, i) => i !== index);
    //     setDataList(updatedDataList);
    //     localStorage.setItem('registrationData', JSON.stringify(updatedDataList));
    // };

    const handleDelete = (index) => {
        const updatedDataList = [...dataList];
        // Removes 1 item at the index
        updatedDataList.splice(index, 1);
        setDataList(updatedDataList);
        localStorage.setItem('registrationData', JSON.stringify(updatedDataList));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) return ''; 
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}/${year}`;
    };

    const totalRecords = dataList.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);

    const currentData = dataList.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen bg-gradient-to-r from-pink-600 to-purple-700 flex items-center justify-center'>
            <div className='bg-white p-12 font-Roboto rounded-lg max-w mx-96 w-full my-24'>
                <h1 className='text-2xl font-bold mb-6'>Submitted Data</h1>
                <table className='min-w-full leading-norma table-fixed'>
                    <thead>
                        <tr>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>S/No</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>First Name</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>Last Name</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>Date of Birth</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>Phone Number</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>Email</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? currentData.map((data, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{index + 1}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{data.firstName}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{data.lastName}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{formatDate(data.birthday)}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{data.phoneNumber}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>{data.email}</td>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm whitespace-nowrap'>
                                    <div className='flex gap-4'>
                                        <button onClick={() => handleEdit((currentPage - 1) * recordsPerPage + index)} className='text-blue-500 hover:text-blue-700 mr-4'>Edit</button>
                                        <button onClick={() => handleDelete((currentPage - 1) * recordsPerPage + index)} className='text-red-500 hover:text-red-700'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )): (
                            <tr>
                                <td colSpan="6" className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className='flex justify-center mt-4'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => changePage(index + 1)}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className='justify-center flex mt-9'>
                    <Link to='/dashboard' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TableData;
