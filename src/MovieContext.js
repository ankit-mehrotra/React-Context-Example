import React,{useState,createContext} from 'react';

export const MovieContext = createContext();
export const MovieProvider = props =>{
    const [movies,setMovies] = useState([
        {
            name: "HarryPorter1",
            price: '10$',
            id:1
        },
        {
           name: "HarryPorter2",
           price: '10$',
           id:2
       },
       {
           name: "HarryPorter3",
           price: '10$',
           id:3
       }
       ]);
   return(
       <MovieContext.Provider value={{movies}}>
           {props.children}
       </MovieContext.Provider>
   );
}