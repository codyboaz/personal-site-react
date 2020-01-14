import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumePDF from '../CodyBoazResume.pdf'


export default class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      closed: true
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ closed: !this.state.closed })
  }
  render() {
    return (
      <div className='row'>
        <a
          className='header-menu'
          onClick={this.handleClick}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z' />
          </svg>
        </a>
        <nav className={this.state.closed ? 'nav close' : 'nav'}>
          <ul className='nav-list'>
            <li className='nav-item'><AnchorLink href='#'>Home</AnchorLink></li>
            <li className='nav-item'><AnchorLink href='#projects'>Projects</AnchorLink></li>
            <li className='nav-item'><a href={resumePDF} target='_blank'>Resume</a></li>
            <li className='nav-item'><AnchorLink href='#contact'>Contact Info</AnchorLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}