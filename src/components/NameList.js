import React from 'react'
import '../assets/css/NameList.css';

export default function NameList({fullName}) {
  return (
        <>
            <div className='fullName'>
                <div className='fullName-info'>{fullName}</div>
                <div className='fullName-info-start'>{fullName.slice(0,1)}</div>
            </div>
        </>
  )
}
