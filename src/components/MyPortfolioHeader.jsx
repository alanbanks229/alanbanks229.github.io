import { Link } from "react-router-dom"

export default function PortfolioHeader(){
  return (
    <header id="header">
      <Link to="/" className="logo">My Portfolio</Link>
    </header>
  )
}