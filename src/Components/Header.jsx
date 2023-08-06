import React from 'react';

const Header = () => {
  return (
    <>
    <nav>
        <ul>
            <li><a href="/"> Home</a></li>
            {/* <li><a href="#"> Rules</a></li> */}
            <li> <a href="/project"> Case theory </a></li>
        </ul>
        <div className="contact-btn">
         <button className="button-55" role="button">Contact</button>

        </div>
    </nav>
    </>
  )
}

export default Header

