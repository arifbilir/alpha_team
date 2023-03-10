import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div> Bilir Tech </div>
      <div>
        <ul>
          {["Services", "Portfolio", "About Us", "Staff", "Contact Us"].map((item,idx) => (
            <li key={idx}>
              <a href= "!#"> {item} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;