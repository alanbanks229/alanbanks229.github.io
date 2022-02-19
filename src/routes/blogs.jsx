import { Link } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import SocialMediaLinks from "../components/social_media_links";
import PortfolioHeader from "../components/MyPortfolioHeader";
import moment from 'moment'
import '../css/blogs.css'

export default function Blogs(){
  const [ articles, articlesSet ] = useState(null);
  const [ profileImg, profileImgSet ] = useState(null);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alanbanks229')
      .then((res) => res.json())
      .then((data) => {
        profileImgSet(data.feed.image);
        let results = data.items.filter(item => item.categories.length > 0);
        articlesSet(results);
      })
      .catch( (err) => {
        alert("something broke")
        console.log(err)
      })
  }, [])
  
  
  function updateArticlePubDate(publish_string){
    let new_string = publish_string.split((/,| /), 3)[0]
  
    let dt = moment(new_string, "YYYY-MM-DD")
    return dt.fromNow()+' | ' + dt.format('LL')
  }
  
  function redirectToSpecificBlog(article){
    let url = article.link
    window.open(url, "_blank")
  }
  return (
    <main>
				{/* <!-- Header --> */}
				<PortfolioHeader/>

				{/* <!-- Nav --> */}
				<nav id="nav">
					<ul className="links">
            <li><Link to="/">About</Link></li>
						<li><Link to="/projects">Projects</Link></li>
						<li><Link to="/projects">Projects</Link></li>
						<li className="active"><button style={{boxShadow: "None"}}>Blogs</button></li>
					</ul>
          <SocialMediaLinks/>
				</nav>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- Post --> */}
							<section className="post">
								<header className="major">
									<h1><a href="https://medium.com/@alanbanks229">Check out my Blogs<br />
									on Medium</a></h1>
								</header>
								<hr />

                { articles ? 
                  articles.map( (article, i) => (
                      <React.Fragment key={article.guid}>
                        <div className="card_container" onClick={() => redirectToSpecificBlog(article)}>
                          <div className="blog_card_header">
                            {/* Figure out what profile image is */}
                            <img alt="profile" className="profileImage" src={profileImg}></img>
                            <img alt="article" className="articleImage" src={article.thumbnail}></img>
                            {/* kinda scuffed nested <p> tags */}
                            <div className="infoGraphics">
                              <b className="nameBold">Alan Banks</b>
                              <br/>
                              <p className="postDate">{updateArticlePubDate(article.pubDate)}</p>
                            </div>
                          </div>
                          <div className="blog_card_title">
                            <header>
                              <h3>{article.title}</h3>
                            </header>
                          </div>
                        </div>
                        <hr/>
                      </React.Fragment>
                    )
                  )
                : 
                  (<div><h2>No Blogs Available</h2></div>) 
                }

							</section>
            </div>

				{/* <!-- Copyright --> */}
				<div id="copyright">
					<ul><li>&copy; 2022 All rights reserved.</li><li>Design from: <a href="https://html5up.net">HTML5 UP</a></li></ul>
				</div>
    </main>
  )
}