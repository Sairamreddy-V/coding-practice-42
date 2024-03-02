import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(
      prevState => ({isDarkTheme: !prevState.isDarkTheme}, this.toPersists),
    )
  }

  toPersists = () => {
    const {isDarkTheme} = this.state
    localStorage.setItem('perValue', `${isDarkTheme}`)
  }

  render() {
    const {isDarkTheme} = this.state
    const values = JSON.parse(localStorage.getItem('perValue'))
    console.log(typeof values)
    return (
      <ThemeContext.Provider
        value={{isDarkTheme: values, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
