import RightCard from "./RightCard"

const Page01RightContent = (props) => {
 return (
 <div className ='h-[80vh] p-4 bg-amber-900 w-2/3 flex gap-5'>
{ props.details.map((data, idx) => (
 <RightCard 
key={idx} 
user={data} 
/>
 ))
}

</div>
 )
}

export default Page01RightContent