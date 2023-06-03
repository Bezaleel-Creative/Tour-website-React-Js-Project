import React, { useState } from "react";
// import React from 'react';
import './NavbarStyle.css'
import { MenuItems } from './MenuItems';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current)
    }

  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>

        <div className='menu-icons' onClick={handleClick}>
            <i className= {isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        
        <ul className={isActive ? 'nav-menu active' : 'nav-menu'} >
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            <i className={item.icon}></i>{item.title}
                        </a>
                    </li>
                )
            })}

            <a href="./signup"><button>Sign Up</button></a>
            
        </ul>
    </nav>
  )
}

export default Navbar
// import React from 'react';
// import { Components } from 'react';
// import './NavbarStyle.css';


// class Navbar extends Components{
//     render(){
//         return(
//             <nav className='NavbarItems'>
//                 <h1 className='navbar-logo'>Trippy</h1>
//                 <ul className='nav-menu'>
//                     <li>
//                         <a>
//                             <i class="fa-solid fa-house-user"></i>Home
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         )
//     }
// };


// export default Navbar;
