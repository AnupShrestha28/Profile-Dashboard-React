import React from 'react'
import '../assets/css/TableHeader.css';

export default function TableHeader() {
  return (
    <table className='table-header'>
        <tr>
            <th className='table-header-name'>Name</th>
            <th className='table-header-pos'>Position</th>
            <th className='table-header-stat'>Status</th>
            <th className='table-header-prog'>Progress</th>
            <th className='table-header-act'>Action</th>
        </tr>
    </table>
  )
}
