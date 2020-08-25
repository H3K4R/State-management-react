import React,{useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = props =>{
    const [movies, setMovies] =useState([   //Array of objects
        {
            name: 'Harray',
            price: '$10',
            id: 23120
        },
        {
            name: 'Wonder',
            price: '$10',
            id: 23120
        },
        {
            name: 'swarnava',
            price: '$10',
            id: 23120
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
    };

