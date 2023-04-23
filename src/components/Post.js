import React from 'react'
import '../assets/css/Post.css';

export default function Post({position}) {
  return (
    <>
      <div className='post'>
            <div className='post-info'>{position}</div>
      </div>
        
    </>
  )
}
