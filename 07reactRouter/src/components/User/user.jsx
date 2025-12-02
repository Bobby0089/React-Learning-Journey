import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {id} = useParams()
  return (
    // <div>user : {id}</div>
    <>
    <h1 className='text-white bg-gray-900 p-4 text-5xl'>My Parrams : {id}</h1>
    </>
  )
}

export default user