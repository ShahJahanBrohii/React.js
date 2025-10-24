import { useState } from "react"

const College = ({name,clicked ,courses}) => {
    
    return(

        <div>

        <hr />

         <h1>College Names : {name[0]} </h1>
    
        <button onClick={clicked}>Click</button>

        <ul>
     
      {courses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

    </ul>

<hr />
        </div>

    )
}

export default College