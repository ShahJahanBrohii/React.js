import Cards from "./Cards"
const Profile = () => {

   const userDetails = [
    {
      comapany: "Google",
      title:"Senior UI/UX Designer",
      pay: "$100/hr"
    },
    {
      comapany: "Amazon",
      title:"Web Developer",
      pay: "$120/hr"
    },
    {
      comapany: "Facebook",
      title:"Frontend Engineer",
      pay: "$140/hr"
    },
    {
      comapany: "Tesla",
      title:"Backend Developer",
      pay: "$160/hr"
    },
    {
      comapany: "Microsoft",
      title:"Model Trainer",
      pay: "$180/hr"
    }      
  ]




  return (
    <>
    <div className="parent-cards-container">
    
    {
      userDetails.map(function(user){
        return <Cards
        userCompany = {user.comapany} 
        userTitle = {user.title}  
        userPay = {user.pay}
        />
      })
    }

    {/* <Cards name = {userDetails[0].comapany} />
    <Cards name = {userDetails[1].comapany} />
    <Cards name = {userDetails[2].comapany} />
    <Cards name = {userDetails[3].comapany} />
    <Cards name = {userDetails[4].comapany} /> */}

   


    </div>
    </>
    
  )
}
 
export default Profile