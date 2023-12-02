import { Link } from "react-router-dom"
import SocialMediaLinks from "../components/social_media_links"
import PortfolioHeader from "../components/MyPortfolioHeader"


export default function Resume(){
  return (
    <main>
        {/* <!-- Header --> */}
        <PortfolioHeader/>

        {/* <!-- Nav --> */}
        <nav id="nav">
            <ul className="links">
                <li><Link to="/">About</Link></li>
                <li className="active"><button style={{boxShadow: "None"}}>Resumé</button></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
            <SocialMediaLinks/>
        </nav>  

				{/* <!-- Main --> */}
				<div id="main">

					<section className="post featured">
						<header>
							<h2>Resumé</h2>
						</header>
            <a href="../images/Alan_Banks_Resume.pdf" className="button small" download>Download PDF Here</a>
					</section>
		
				</div>

				<div id="copyright">
					<ul><li>&copy; 2022 All rights reserved.</li><li>Design from: <a href="https://html5up.net">HTML5 UP</a></li></ul>
				</div>
    </main>
  )
}