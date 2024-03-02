// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onButton = () => {
        toggleTheme()
      }

      const textClassname = isDarkTheme ? 'light-theme-text' : 'dark-theme-text'
      const navClassName = !isDarkTheme ? 'nav-container' : 'nav-dark-container'
      return (
        <nav className={navClassName}>
          {!isDarkTheme ? (
            <img
              className="logo-img"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            />
          ) : (
            <img
              alt="website logo"
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            />
          )}
          <ul className="nav-ul-container">
            <Link to="/">
              <li className={textClassname}>Home</li>
            </Link>
            <Link to="/about">
              <li className={textClassname}>about</li>
            </Link>
          </ul>
          <button data-testid="theme" className="button" onClick={onButton}>
            {isDarkTheme ? (
              <img
                className="nav-theme-img"
                alt=""
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              />
            ) : (
              <img
                className="nav-theme-img"
                alt=""
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              />
            )}
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
