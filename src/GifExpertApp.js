import React, { useState } from "react";
import { AddCategory } from "./components/AddCaregory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    //   const categories = ["One Puch", "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(['One Puch']);

    return (
        <>
            <h2 >GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol >
                {
                    categories.map(category =>
                        <GifGrid 
                            key={{ category }}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};
