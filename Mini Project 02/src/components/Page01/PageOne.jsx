import Header from "./Header"
import Navbar from "./Navbar"

import Page01Content from "./Page01Content"
const PageOne = (props) => {
  
  // console.log(props.details);
  

  return (
   <div  className=" h-screen w-full bg-amber-700">

    <Navbar />

    <Page01Content details = {props.details}/>

   </div>
  )
}

export default PageOne
