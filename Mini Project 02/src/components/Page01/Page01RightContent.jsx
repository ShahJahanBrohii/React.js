import RightCard from "./RightCard"

const Page01RightContent = (props) => {

   
  return (
    <div className ='h-[80vh] p-4  bg-amber-900 w-2/3 flex gap-5'>


   {/* <RightCard details = {props.details} />
   <RightCard details = {props.details} />
    */}
    
      {    props.details.map((data)=>{
        <RightCard img = {data.img} />
    })
    }

    </div>
  )
}

export default Page01RightContent