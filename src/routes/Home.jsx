import { Link } from "react-router-dom"
import SocialMediaLinks from "../components/social_media_links"
import PortfolioHeader from "../components/MyPortfolioHeader"
import '../css/home.css';

const reactLogo = "../images/react-1-logo-png-transparent.png";

export default function Home(){

  const styles = {
    header: {
      width: '100%',
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
    },
    reactLogo: {
      width: '53px',
      height: '53px',
      marginLeft: '5px',
    },
  }

  return (
      <main>
          {/* <!-- Header --> */}
          <PortfolioHeader/>

          {/* <!-- Nav --> */}
            <nav id="nav">
              <ul className="links">
                <li className="active"><button style={{boxShadow: "None"}}>About</button></li>
                <li><Link to="/resume">Resumé</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
              </ul>
              <SocialMediaLinks/>
            </nav>

          {/* <!-- Main --> */}
          <div id="main">

            <section className="post">
              <header style={styles.header}>
                <div style={styles.title}>
                  <h2 style={{flexDirection: 'row'}}>🎵 Musician turned Software Engineer</h2>
                  <img src={reactLogo} className="spin-logo" style={styles.reactLogo}/>
                </div>
              </header>
              <p style={{width: "100%"}}>
                From a young age, I enjoyed singing, playing piano, and using technology to create interesting sounds with MIDI.
                As a software engineer I enjoy having the skills to be a part of our rapidly changing world.
                It`s a career that has given me the opportunity to be creative in my design while creating real life application tools we can use every day.
              </p>
              <div className="about_images_container">
                  <img className="resize_img_inline" src="../images/missions_1.jpg" alt="" style={{marginRight: "6%"}}/>
                  <img className="resize_img_inline" src="../images/singing.jpg" alt=""/>
              </div>
            </section>
    
        </div>

        {/* <!-- Footer --> */}

        {/* <!-- Copyright --> */}
      </main>
  )
}