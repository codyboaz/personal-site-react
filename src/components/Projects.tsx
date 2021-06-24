import React from "react";
import myReadsImg from "../images/my-reads.png";
import githubBattleImg from "../images/github-battle.png";
import yelpCampImg from "../images/yelpCamp.png";
import budgetAppImg from "../images/budget.png";
import diceGameImg from "../images/dice.png";
import colorGameImg from "../images/colorGame.png";
import hackerNewsImg from "../images/hacker-news.png";
import simonSaysImg from "../images/simon-says.png";

export type projectInfo = {
  name: string;
  link: string;
  imgSrc: any;
  alt: string;
};

const Projects = () => {
  const project: projectInfo[] = [
    {
      name: "My Reads",
      link: "https://my-reads-1214.netlify.app",
      imgSrc: myReadsImg,
      alt: "My Reads Website"
    },
    {
      name: "Github Battle",
      link: "https://github-battle-1214.netlify.com",
      imgSrc: githubBattleImg,
      alt: "Github Battle Website"
    },
    {
      name: "Hacker News Clone",
      link: "https://hacker-news-1214.netlify.com",
      imgSrc: hackerNewsImg,
      alt: "Hacker News Clone Website"
    },
    {
      name: "Simon Says",
      link: "https://simon-says-1214.netlify.com",
      imgSrc: simonSaysImg,
      alt: "Simon Says Game Website"
    },
    {
      name: "Yelp Camp",
      link: "https://howling-nightmare-48243.herokuapp.com",
      imgSrc: yelpCampImg,
      alt: "Yelp Camp Website"
    },
    {
      name: "Budget App",
      link: "https://codyboaz.github.io/budget-app",
      imgSrc: budgetAppImg,
      alt: "Budget App"
    },
    {
      name: "Dice Game",
      link: "https://codyboaz.github.io/dice_game",
      imgSrc: diceGameImg,
      alt: "Dice Game App"
    },
    {
      name: "Color Game",
      link: "https://codyboaz.github.io/rgb_game",
      imgSrc: colorGameImg,
      alt: "Color Game App"
    }
  ];

  return (
    <div className="row projects">
      <div className="col-12" id="projects">
        <h2>Projects</h2>
      </div>
      {project.map(({ name, link, imgSrc, alt }) => (
        <div className="project-img">
          <a href={link}>
            <img src={imgSrc} alt={alt} className="proj-img" />
            <p>{name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
