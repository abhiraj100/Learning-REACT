import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()   // to get the data.follower, data.name because useLoaderData() returns the response which contains the github data.

    // const [data, setData] = useState([])   // state to load the data and console.log(data)
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
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <p>Name : {data.name}</p>
    <p>Company : {data.company}</p>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhiraj100');
    return response.json();
}