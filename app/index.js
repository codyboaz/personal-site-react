import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <main>
        <Container />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)