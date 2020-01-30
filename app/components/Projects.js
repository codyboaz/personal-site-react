import React from 'react'
import githubBattleImg from '../images/github-battle.png'
import yelpCampImg from '../images/yelpCamp.png'
import budgetAppImg from '../images/budget.png'
import diceGameImg from '../images/dice.png'
import colorGameImg from '../images/colorGame.png'
import hackerNews from '../images/hacker-news.png'

export default function Projects() {
  return (
    <div className='row projects'>
      <div className='col-12' id='projects'>
        <h2>Projects</h2>
      </div>
      <div className='project-img'>
        <a href='https://github-battle-1214.netlify.com/'>
          <img src={githubBattleImg} alt='Github Battle Website' className='proj-img' />
          <p>Github Battle</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://hacker-news-1214.netlify.com/'>
          <img src={hackerNews} alt='Hacker News Clone Website' className='proj-img' />
          <p>Hacker News Clone</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://howling-nightmare-48243.herokuapp.com/'>
          <img src={yelpCampImg} alt='Yelp Camp Website' className='proj-img' />
          <p>Yelp Camp</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://codyboaz.github.io/budget-app/'>
          <img src={budgetAppImg} alt='Budget App' className='proj-img' />
          <p>Budget App</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://codyboaz.github.io/dice_game/'>
          <img src={diceGameImg} alt='Dice Game App' className='proj-img' />
          <p>Dice Game</p>
        </a>
      </div>
      <div className='project-img'>
        <a href='https://codyboaz.github.io/rgb_game/'>
          <img src={colorGameImg} alt='Color Game App' className='proj-img' />
          <p>Color Game</p>
        </a>
      </div>
    </div>
  )
}