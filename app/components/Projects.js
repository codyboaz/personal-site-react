import React from 'react'

export default function Projects() {
  return (
    <div className='row projects'>
      <div className='col-12' id='projects'>
        <h2>Projects</h2>
      </div>
      <div className='project-img'>
        <a href='https://wonderful-shockley-b7c15a.netlify.com/'>
          <img src='app/images/github-battle.png' alt='Github Battle Website' className='proj-img' />
          <p>Github Battle</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://howling-nightmare-48243.herokuapp.com/'>
          <img src='app/images/yelpCamp.png' alt='Yelp Camp Website' className='proj-img' />
          <p>Yelp Camp</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='projects/budget-app/index.html'>
          <img src='app/images/budget.png' alt='Budget App' className='proj-img' />
          <p>Budget App</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='projects/dice-game/index.html'>
          <img src='app/images/dice.png' alt='Dice Game App' className='proj-img' />
          <p>Dice Game</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='projects/rgb-game/colorGame.html'>
          <img src='app/images/colorGame.png' alt='Color Game App' className='proj-img' />
          <p>Color Game</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='projects/favorite-movies/fresh_tomatoes.html'>
          <img src='app/images/favoriteMovies.png' alt='Favorite Movies Website' className='proj-img' />
          <p>Favorite Movies Website</p>
        </a>
      </div>
    </div>
  )
}