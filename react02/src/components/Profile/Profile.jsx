export const Profile = (props) => {
  console.log(props.username);
  return (
    <>
    
    
    <div className="parent-container">
    <img src={props.img} alt="" />
    <h1>{props.username}</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illo alias harum dolorum </p>
    <button>View Profile</button>
    </div>

   


    
    </>
  )
}


export default Profile
