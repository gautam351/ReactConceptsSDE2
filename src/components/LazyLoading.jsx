import { lazy,Suspense, useState } from "react";





const LazyLoading = () => {
    const [isVisible, setisVisible] = useState(false);
    const LazyLoadingChild=lazy(()=>import('./HelperCompoenents/HelperLazyChild'))

  return (
  <>
    <div style={{width:"100%",height:"100vh"}}>
      <h1>Welcome to Lazy Loading Page</h1>
      <button  onClick={(e)=>setisVisible(true)} >Load Child Component</button>
      {isVisible && 
     
      <Suspense fallback={<div>Loading...</div>}>
       
        <LazyLoadingChild />
      </Suspense>
     
     }
    </div>

     
      
     

  </>
  )
}

export default LazyLoading;


