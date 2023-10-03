// src/Table.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Table = ({ data, onDelete  }) => {
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Feshness</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.uuid}>
                        <td>{item.uuid}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.selectedBarang}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/detail/${item.uuid}`} state={{ detailData: item }}>Detail</Link>
                            <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
