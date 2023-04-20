import React, { useEffect} from 'react'
import SingleJob from './SingleJob'

export const Joblist = ({data}) => {

  return (
    <div className='jobs'>
        
        {
          data.map((item) => {
            return <SingleJob key={item.id} data={item} />
          })
        }

    </div>
  )
}
