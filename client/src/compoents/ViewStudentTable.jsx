import axios from 'axios'
import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

export default function ViewStudentTable() {
    const [studentdata, setstudentdata] = useState([])

    useEffect(() => {
        const data = async () => {
            axios.get('/api/admin/getallstudent')
                .then(({ data }) => {
                    setstudentdata(data)
                    // console.log(data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
        data()
    }, [])
    return (
        <div className='table-auto overflow-x-scroll mt-3 md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 
    dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500 '>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Rollno</Table.HeadCell>
                    <Table.HeadCell>Department</Table.HeadCell>
                    <Table.HeadCell>Gender</Table.HeadCell>
                    <Table.HeadCell>fees</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {studentdata && studentdata.map((data) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data.name}
                            </Table.Cell>
                            <Table.Cell>{data.rollno}</Table.Cell>
                            <Table.Cell>{data.department}</Table.Cell>
                            <Table.Cell>{data.gender}</Table.Cell>
                            <Table.Cell>{data.fees}</Table.Cell>
                            <Table.Cell>
                                <div className='flex gap-2'>
                                    <span className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Edit</span>
                                    <span className="font-medium text-red-600 hover:underline dark:text-red-500">Delete</span>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
