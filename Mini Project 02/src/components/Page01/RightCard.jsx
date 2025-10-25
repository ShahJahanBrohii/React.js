import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    
    const { img, intro } = props.user;
    
    console.log("Image URL:", img); 
    console.log("Intro text:", intro); 
    
   
    // console.log("Image URL:", props.user.img);
    // console.log("Intro text:", props.user.intro);

    return (
 <div className="h-full w-70 overflow-hidden relative rounded-3xl bg-amber-300">   
<img className ='h-full w-full object-cover ' src={props.user.img} alt="User Profile" />

<RightCardContent intro={props.user.intro} />

</div>
 )
}

export default RightCard