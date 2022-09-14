import React from 'react'
import { Table } from 'react-bootstrap'

export const CustomTable = ({ tableHead = [], tableData = [] }) => {
    return (
        <Table stripped hover border>
            <thead>
                <tr>
                    <th>#</th>
                    {tableHead.map((heading, i) => (
                        <th key={i}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            {
                                Object.keys(user).map((key, j) => (
                                    <td>{user[key]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}
