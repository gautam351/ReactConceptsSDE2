import { useRef } from "react";



const HelperLazyChild=()=>{
    const imgSource = useRef("../../../public/PublishMedium.jpeg");
    

    return (

        <>
      
    <img src={imgSource.current} alt="Lazy Loaded" />
    </>
    )
}

export default HelperLazyChild;