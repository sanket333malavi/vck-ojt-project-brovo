import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
           <>
           {/* <Link to="/aboutpage">AboutPage</Link>
           <Link to="/header">header</Link>
           <Link to="/homepage">homepage</Link> 
           <Link to="/coursepage">coursepage</Link>
           <Link to="/contactpage">contactpage</Link> */}
<div className="main-layout">
                 <header className="main-header">
     <div className="college-name">
            <a href="#">Vivekanand College</a>
     </div>
    <button class="hamburger-menu">
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
    </button>
      <nav className="desktop-nav">
             <a href="/homepage" className="nav-item">Home</a>
             <a href="/aboutpage" className="nav-item">About</a>
             <a href="/coursespage" className="nav-item">Courses</a>
             <a href="/contactpage" className="nav-item">Contact</a>
             <a href="/applynow" className="nav-item-btn">Apply Now!</a>
      </nav>

      </header>
</div>
       
           </>
    )
}

export default Header;