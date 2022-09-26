import React from 'react'
import Pagination from 'react-bootstrap/Pagination';



export const PaginationBasic = ({ pages, active, handleOnPaginationClick }) => {


    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item
                onClick={()=>handleOnPaginationClick(number)}
                key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }



    return (
        <div className='d-flex justify-content-center'>
            <Pagination>{items}</Pagination>
            <br />

        </div>
    )
}
