import './Components.css'

const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar">
        <div className="logoTitle">The News</div>
        <div className="navigations">
            <ul>
                <li onClick={()=>props.setCategory("all")}>All Categories</li>
                <li onClick={()=>props.setCategory("business")}>Business</li>
                <li onClick={()=>props.setCategory("sports")}>Sports</li>
                <li onClick={()=>props.setCategory("science")}>Science</li>
                <li onClick={()=>props.setCategory("health")}>Health</li>
                <li onClick={()=>props.setCategory("entertainment")}>Entertainment</li>
                <li onClick={()=>props.setCategory("technology")}>Technology</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
