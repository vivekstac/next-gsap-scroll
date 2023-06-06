import React, { useState } from 'react';

function Header() {
  const [menuActive, setmenuActive] = useState(false);
  console.log(menuActive, "as")
  return (
    <div className='header-section'>
      <h1>Header</h1>
      <div>
        <h2>LOgO</h2>
      </div>
      <div className='navbar' onClick={() => setmenuActive(!menuActive)}></div>

      <div className={`mega-menu ${!menuActive ? "" : "active"}`}></div>
    </div>
  )
}

export default Header