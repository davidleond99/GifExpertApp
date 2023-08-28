import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../utils/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(imgs => setImages (imgs))
    }, [category])


    return (
        <>
            <h3 > {category} </h3>

            {<div className='card'>
                {images.map(img =>
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />)}

            </div> }
        </>
    )
}
