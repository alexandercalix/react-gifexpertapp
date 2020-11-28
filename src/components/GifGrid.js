import React from 'react'
 import { GifGridItem } from './GifGridItem';
// import { getGift } from './../helpers/getGifs';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

 
    // const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);
   
    return (
        <>
        <h3>{category}</h3>

         {loading && 'Cargando...'} 


         <div className="card-grid ">
          
                {
                    images.map(img=>
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                    )
                }
            
        </div> 
        </>
    )
}
