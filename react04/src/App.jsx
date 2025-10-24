 import Counter from "./components/Counter";
 import Home from "./components/Home";
import College from "./components/College";


import ApplyButton from "./components/button/ApplyButton";
import Header from "./components/header/Header";


 const App = () => {
  let name = "Shah Jahan"
  let age = 22
  let email = "Shahjahan@gmail.com"


  const user1 = {
    name : "Shah Jahan",
    age: 22,
    email: "Shahjahan@gmail.com"
  }
  const user2 = {
    name : "Shah Nawaz",
    age: 25,
    email: "Shahnawaz@gmail.com"
  }


  let clgNames = ['SIBA',"MUET","IQRA"]


  const greet = () =>{
    alert("The button has been clicked")
  }

  const courses = ["React", "Node.js", "MongoDB"];

  return(
    <div>

      {/* <h1>Hello...</h1>

      <Counter /> */}
      
      {/* <Home name = "Shah Jahan" age = {22} email = "Shahjahan@gmail.com"/> */}
      {/* <Home name = {name} age = {age} email = {email }/> */}
<hr />
{/* 
      <h1>Props in React.js</h1>
      <Home info = {user1}/>
      <Home info = {user2}/> */}



      <College name = {clgNames}  clicked = {greet} courses = {courses}/>





<ApplyButton />

<Header />

    </div>

    
  )
}

 export default App;