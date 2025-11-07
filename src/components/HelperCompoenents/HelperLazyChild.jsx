import { useRef } from "react";



const HelperLazyChild=()=>{
    const imgSource = useRef(`${import.meta.env.BASE_URL}PublishMedium.jpeg`);
    

    return (

        <>
      
    <img src={imgSource.current} alt="Lazy Loaded" />
    </>
    )
}

export default HelperLazyChild;