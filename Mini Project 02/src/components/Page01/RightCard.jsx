import RightCardContent from "./RightCardContent"
const RightCard = (props) => {
    
    console.log(props);
    console.log(props.details[0].intro);
    
   
  

  return (
    <div className="h-full w-70 overflow-hidden relative rounded-3xl bg-amber-300">   
 
    <img  className ='h-full w-full object-cover ' src="https://plus.unsplash.com/premium_photo-1760876476171-23c6ddefd8f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1200" alt="" />
            
   


    <RightCardContent />

    </div>
  )
}

export default RightCard