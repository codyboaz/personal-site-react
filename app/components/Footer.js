import React from 'react'

export default function Footer() {
  return (
    <footer className='margin-footer' id='contact'>
      <h2>Find Me On</h2>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/codyboaz'>
            <div className='fontawesome-linkedin-sign blue-background'></div>
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href='https://github.com/codyboaz'>
            <div className='fontawesome-github purple-background'></div>
            <p>GitHub</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}