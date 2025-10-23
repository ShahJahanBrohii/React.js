import Heading from "./components/Navbar/Navbar";
import Logo,{Home,Contact} from "./components/Navbar/logo";
import Navbar from './components/Navbar/Navbar'
import Card from './components/Navbar/Card'
import Container from "./components/Navbar/Container";
import  Profile  from "./components/Profile/Profile";


function App() {
  return( 
  <>
    
    <h1>Apple</h1>
    <h1>Apple</h1>
    <Contact />
    <Heading />
    <Logo />
    <Home />
    <h2>Hello</h2>
    <div className="card-cont">
      <Card />
    <Container />
    </div>

    <div className="prof">
    <Profile username = 'Shah Jahan' img = "https://images.unsplash.com/photo-1760681555543-0a3c65fa10eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
    <Profile username = 'Shah Nawaz' img = "https://images.unsplash.com/photo-1761086495820-1b9a31eca82f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
    <Profile username = 'Abbas' img  = "https://images.unsplash.com/photo-1761086555461-1098623cb04b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />

    </div>
 </>
  )
}

export default App;

//React js 19 tutorial in Hindi #5 Hello World | React js app Code Flow: Time:4:45
