// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const pageClassName = !isDarkTheme
        ? 'page-light-theme'
        : 'page-dark-theme'
      return (
        <>
          <Navbar />
          <div className={pageClassName}>
            <img
              alt="not found"
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className="">Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
