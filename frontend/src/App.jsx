import './App.css';
import { useState } from 'react';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="menu-toggle close-icon" onClick={() => setIsOpen(false)}>
            {/* Close Menu Icon */}
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
          </li>
          
          <li id='website-icon'><a href='#'>GazdiNet</a></li>
          <li><a href='#'>Örökbefogadás</a></li>
          <li><a href='#'>Kisállat profil létrehozása</a></li>
          <li><a href='#'>Menhelyek támogatása</a></li>
          <li><a href='#'>Rólunk</a></li>
          <li className='rightItem'><a href='#'>Bejelentkezés</a></li>
          <li><a href='#'>Regisztráció</a></li>

        </ul>
        <div className="menu-toggle menu-icon" onClick={() => setIsOpen(true)}>
          {/* Open Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
      </nav>

    </>
  )
}