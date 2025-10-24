
const Home = ({info}) => {
    console.log(info);
    
    return(
        <div>
            <hr />
        <h1>Name : {info.name}</h1>
        <h1>Age : {info.age}</h1>
        <h1>Email : {info.email}</h1>

        </div>
    )
}

export default Home