import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=5&api_key=GVnJOnGhG92pXxGobMnjdXXprISiNKbo';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(({id, title, image}) => {
            return {
                id: id,
                title: title,
                image: images?.downsized_medium.url
            }
        })

        setImages(gifs);

        console.log(data)

    }

    // getGifs();

    return (
        <div >
            <h3 > {category} </h3>
            <ol>
                { images.map( ({id, title}) => <li key={id}  > {title} </li> ) }
            </ol>
        </div>
    )
}

// GifGrid.propTypes = {
//     category: PropTypes.array.isRequired
// }