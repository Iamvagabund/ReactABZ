import React from 'react'
import Button from '../UI/button/Button';
import './Header.css';
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="TESTTASK" />
        </div>
        <div className="header__buttons">
          <Button>Users</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  )
}

export default Header