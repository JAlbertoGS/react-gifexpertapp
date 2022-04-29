import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = [];
    const [categories, setCategories]=useState(['One Punch']);
    // const   handleAdd = () => {
    //     setCategories(cats => [...cats,'Death Note']);
    // }
    return (
        <>
            <h2> gifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            
            <ol>
                {
                    categories.map((category) => (
                         <GifGrid 
                         category={category}
                         key={category}
                         />
                    ))
                }
            </ol>
        </>
    )
}
