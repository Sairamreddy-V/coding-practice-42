// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
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
            {isDarkTheme ? (
              <img
                alt="theme"
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              />
            ) : (
              <img
                className="home-img"
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              />
            )}
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
