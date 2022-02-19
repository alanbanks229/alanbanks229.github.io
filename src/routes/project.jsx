import { Link } from "react-router-dom"
import SocialMediaLinks from "../components/social_media_links"
import PortfolioHeader from "../components/MyPortfolioHeader"

import '../css/projects.css'

export default function Project(){
  return (
    <main>
        <PortfolioHeader/>

				{/* <!-- Nav --> */}
				<nav id="nav">
					<ul className="links">
            <li><Link to="/">About</Link></li>
						<li><Link to="/resume">Resumé</Link></li>
						<li className="active"><button style={{boxShadow: "None"}}>Projects</button></li>
						<li><Link to="/blogs">Blogs</Link></li>
					</ul>
          <SocialMediaLinks/>
				</nav>

				{/* <!-- Main --> */}
				<div id="main">

				<article className="post featured">

					<header className="major">
						<h2>Projects</h2>
					</header>

					<hr/>

					<h2>"Current Trends"</h2>
          <ul className="project-git-logo-ul">
            <li>
              <h2 className="project-git-logo icon brands fa-github large">Github: </h2>
              <a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end button small" href="https://github.com/alanbanks229/current_trends_app_frontend">Front-End</a>
              <a rel="noopener noreferrer" target="_blank" className="project-git-links-back-end button small" href="https://github.com/alanbanks229/current_trends_app_backend">Back-End</a>
            </li>
          </ul>

					<div>
							<iframe
                title="Current Trends Youtube"
                className="labtop"
                width="800"
                height="560"
                src="https://www.youtube.com/embed/N-hRG1RldIY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
              </iframe> 
					</div>

					<p style={{color: "red"}}><b>Update: 6/3/20</b>
						<br/>
						Due to recent changes in NEWSAPI developer plan, the live site has been taken down from heroku :(
						<br/> 
						The specific change prevented the ability to fetch news articles outside of a test environment.
					</p>

					<b style={{float: "left"}}>Features:</b>
          <br/>
					<h3>An online search engine where users can get news around the world.</h3>
          <br/>
          <ul className="current_trends_features">
            <li>Filter news by categories and languages</li>
            <li>Get your local news</li>
            <li>Get your local 5-day weather forecast</li>
          </ul>
				</article>
		
				<section className="posts">
					<article>
						<header>
							<h2>
								"Draw Off"
							</h2>
						</header>
						<ul className="project-git-logo-ul-smaller">
							<li>
								<h3 className="project-git-logo-smaller icon brands fa-github">Github: </h3>
								<a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end small button" href="https://github.com/IdleScV/mod4_frontend">Front-End</a>
								<a rel="noopener noreferrer" target="_blank" className="project-git-links-back-end small button" href="https://github.com/alanbanks229/mod4_backend">Back-End</a>
							</li>
						</ul>
						<div>
                <iframe title="Draw Off Youtube Link" height="260px" width="500px" src="https://www.youtube.com/embed/4vn4oCgs-wc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
						</div>
						<p>An online multiplayer game where users are given a prompt to draw and the winner has the most likes.<br/>
              <li>Multiple game lobbies!</li>
              <li>Play to get the highest rating!</li>
						</p>
						<ul className="actions special">
							<li><a rel="noopener noreferrer" target="_blank" href="https://draw-off-app.herokuapp.com/" className="button">Live Site</a></li>
						</ul>
					</article>
					<article>
						<header>
							<h2>
								"Askit"
							</h2>
						</header>
						<ul className="project-git-logo-ul-smaller">
							<li>
								<h3 className="project-git-logo-smaller icon brands fa-github">Github: </h3>
								<a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end button small" href="https://github.com/alanbanks229/Mod_2_Project">Github</a>
							</li>
						</ul>
						<img src="../images/mod2_pic_in_action.png" height="260px" width="500px" alt="Mod2 Project from Flatiron School" />
						<p>An online forum where you can post any kind of question under specific categories and receive responses from other users who use this app!
							<br/>
							Users can also add additional categories with validations from admins.
						</p>
						<ul className="live_link_ul actions special">
							<li><span className="button disabled">Coming Soon</span></li>
						</ul>
					</article>
				</section>
		
					<header className="major">
						<span className="date">More to come 😊</span>
					</header>
		
				</div>	

				{/* <!-- Copyright --> */}
				<div id="copyright">
					<ul><li>&copy; 2022 All rights reserved.</li><li>Design from: <a href="https://html5up.net">HTML5 UP</a></li></ul>
				</div>
    </main>
  )
}