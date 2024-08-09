import React from 'react'
import { useState } from 'react';

const Pagenate = ({ dataList, handleEdit, handleDelete, formatDate }) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [itemPerPage,setItemPerPage] = useState(10);
    const lastItemIndex = currentPage * itemPerPage;
    const firstItemIndex = lastItemIndex - itemPerPage;
    const thisPageItems = dataList.slice(firstItemIndex,lastItemIndex);
    const pages = []
    for(let i=1 ; i< dataList.length / itemPerPage;i++) {
        pages.push(i);
    }
  return (
    <div>
        <nav>
            {pages.map((page) => (
            <button
                onClick={() => setCurrentPage(page)}
                className={`btn btn-outline-${currentPage === page ? 'primary' : 'white'}`}>
                {page}
            </button>
        ))}
      </nav>
    </div>
  )
}

export default Pagenate
