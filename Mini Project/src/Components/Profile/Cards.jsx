import { Bookmark } from 'lucide-react';
const Cards = () => {
  return (

    <div className="container">

    <div className="card">  

      <div className="top">
        <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="" />
        <button> <Bookmark/> Save</button>
      </div>

      <div className="center">
        <h3>Google <span>5 days ago</span></h3>
      <h1>Senior UI/UX Designer</h1>
      

      <div>
        <h4>Part Time</h4>
        <h4>Senior Developer Time</h4>
      </div>
</div>
      <div className="bottom">
        <div>
          <div>
            <h3>$120/hr</h3>
            <p>Sukkur, Pakistan</p>
          </div>
          <button>Apply</button>
        </div>
      </div>

    </div>

    </div>


  )
}


export default Cards
