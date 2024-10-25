import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import '../App.css'


const Post = () => {

    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(4);

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
        // .then((res) => console.log(res.data))
        .then((res) => setData(res.data));
        // console.log(response);
    }, [pageNo]);

  return (
    <div className='container'>
      <div className='post-container'>
      {
        data && data.map((item, index) => {
          return  (<img key={index} src={item.download_url} />)
        })
      }
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  )
}

export default Post;
