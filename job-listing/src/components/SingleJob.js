import React from 'react'

export default function SingleJob(props) {
  return (
    <div className='job-container'>{props.data.company}</div>
  )
}