import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/abhiraj100')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data);
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='flex justify-center items-center max-w-full max-h-full' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhiraj100');
    return response.json();
}