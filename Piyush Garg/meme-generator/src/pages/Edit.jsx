import React, { useState, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
    const [params] = useSearchParams();
    // console.log(params.get("url"));

    const memeRef = createRef();

    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    };
    
    return (
        <>
            <div>
                <div style={{ width: "300px", border: "1px solid"}} ref={memeRef} className='meme mt-5 mb-5'>
                    <img src={params.get("url")} width="250px"/> 
                    {
                        Array(count).fill(0).map((e) => <Text />)
                    }
                </div>

                <Button onClick={addText} style={{ backgroundColor: "blue", color: "white"}}>Add Text</Button>
                <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}  style={{ backgroundColor: "green", color: "white"}}>Save</Button>
            </div>
        </>
    )
}

export default EditPage;