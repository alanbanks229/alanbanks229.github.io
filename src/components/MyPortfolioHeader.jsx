import { Link } from "react-router-dom"
// import {} from "../../public/images/react-1-logo-png-transparent.png"

const reactLogo = "../images/react-1-logo-png-transparent.png";
export default function PortfolioHeader(){
  return (
    <header id="header">
      <Link to="/" className="logo">My Portfolio</Link>
    </header>
  )
}