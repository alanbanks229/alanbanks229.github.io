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
            <a href="../images/AlanBanks Resume 2024.pdf" className="button small" download>Download PDF Here</a>
					</section>
		
				</div>
    </main>
  )
}