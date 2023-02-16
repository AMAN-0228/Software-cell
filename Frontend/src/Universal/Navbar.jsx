import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="bhanu">
     <nav className="navbar navbar-expand-lg">
    <div className="container-fluid" >
   {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button> */}
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <div style={{marginLeft:"1110px"}}>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/home">Home</a>
           </li>
           </div>
           <li className="nav-item">
             <a className="nav-link active" href="/story">developer</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" href="/events">events</a>
           </li>
           <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features</a>
              <div >
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About us </a></li>
                <li><a className="dropdown-item" href="#">We together</a></li>
                </ul>
              </div>
               
            </div>
          <div  >
            <li className="nav-item">
             <a className="nav-link active" href="/login">Login</a>
             </li>
             </div>
             <li className="nav-item">
             <a className="nav-link active" href="/signup">Signup</a>
             </li>
            
            
          </ul>
           <div >
            
            </div>
           </div>
          </div>
          </nav>
          
    </div>
  )
}

export default Navbar

