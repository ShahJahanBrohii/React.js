import { useState } from "react";
import User from "./User";
const Counter = () => {

    const [count,setCount] = useState(0)

    const [display,setDisplay] = useState(true)


    const increment = ()=>{
        setInterval(() => {
            setCount(prev => prev+1)
        }, 1000);
    }

    return(

        <div>
        
        <h1>This is a simple counter...</h1>

        <h2>Count : {count}</h2>

        {/* <button onClick={() => setCount((prev) => prev+1)}>Increment</button>
        <button onClick={() => setCount(count+1)}>Increment</button> both work well
        <button onClick={() => setCount((prev) => prev-1)}>Decrement</button>  */}
        

        <button onClick={increment}>Update +ve</button>

        <button onClick={()=> setDisplay(!display)}>Toggle</button>


            {/* Hide and Show */}

           {
            display ? <User /> : null
           }

           {/* <button onClick={() => {
                setDisplay(prev => {
                    if(prev==true)
                        return prev=false
                    else return prev=true
                })
           }}>Toggle</button> This code will also work but its little bit complex */}

            
        </div>
    )
}

export default Counter;