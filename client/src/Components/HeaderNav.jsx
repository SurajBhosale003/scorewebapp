
import '../App.css'
import './Football.css'

// import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <div>
 <section className="top-header">
            {/* Top Navigation Starts */}
            <nav>
                <div className="menu-icon"><i className="fas fa-bars"></i></div>
                <div className="nav-links">
                    <a >Home</a> {/* Replace href with Link */}
                    <a href="#players">Players</a>
                    <a href="#trending">Trending</a>
                    <a href="#highlights">Highlights</a>
                    <a href="#Feed">Feed</a>
                    <a href="#clubs">Clubs</a>
                    <a href="#highlights">Pricing</a>
                </div>
                <span>
                    <a className="link-button" href=""><i className="fas fa-sign-in-alt"></i> Login</a>
                </span>
            </nav>
            {/* Top Navigation Ends */}
            <div className="top-banner">
                <div className="top-banner-text">
                    <h1>FIFA Club World Cup</h1>
                    <a className="link-button"  href="https://www.scorebat.com/free-livescore-widget/">Watch Live <i
                            className="fas fa-arrow-right"></i></a>
                </div>
                <div className="top-banner-image">
                    <img src="img/banner.png" alt="Footballer" />
                </div>
            </div>
        </section>

    </div>
  )
}

export default HeaderNav