
import { useState, useEffect } from 'react';
import { getGift } from './../helpers/getGifs';

export const useFetchGifs=(category)=>{
    
    const [state, setState] =  useState({
        data : [],
        loading: true
    });

    useEffect(()=>{

        getGift(category)
                .then(imgs => {                
                        setState({
                            data:imgs,
                            loading:false
                        })  
            })            

    },[category])

    //    //lista de dependencias
    // useEffect(()=>{
    //   getGift(category)
    //   .then(setImages)
    // },[category]);//sin argumentos solo se ejecuta 1 vez
    // //si categoria cambia vuelve a ejecutar el efecto


    return state;

}