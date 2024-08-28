import { useState } from "react"

export default function Count(){

     let [count,setcount]= useState(0);

     let incCount=()=>{
         setcount((currCount)=>{
          return currCount +1;
         }) ;

         setcount((currCount) => {
             return currCount + 1;
         });
        //  setcount((currCount) => {
        //      return currCount + 1;
        //  });
     }
  
    return(
        <div>
        <h1>States in react</h1>
        <p>count = {count}</p>
        <button onClick={incCount}>INC count</button>
        </div>
    )
}