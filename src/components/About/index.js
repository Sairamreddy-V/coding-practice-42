// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const pageClassName = !isDarkTheme
        ? 'page-light-theme'
        : 'page-dark-theme'
      const altName = isDarkTheme === true ? 'theme' : 'about'
      return (
        <>
          <Navbar />
          <div className={pageClassName}>
            {isDarkTheme ? (
              <img
                alt={altName}
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              />
            ) : (
              <img
                className="home-img"
                alt={altName}
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              />
            )}
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
