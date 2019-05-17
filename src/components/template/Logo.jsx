import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

export default props => 
  <aside className="logo">
    <Link to="/" className="logo">
      <img src="https://media.insider.com/public/assets/BI/UK/logos/logos-page/BI_UK_dark_background_white_horizontal.png" alt="logo"></img>
    </Link>
  </aside>