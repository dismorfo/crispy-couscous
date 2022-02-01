import { Link } from "react-router-dom";
// import ToggleNavigation from '../images/toggle-navigation.svg';

export default function TopNavigation(props) {
  return (
    <nav className="navbar navbar-default" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed widget" data-toggle="collapse" data-name="navButton">
          {/* {ToggleNavigation} */}
          <span className="sr-only">Toggle navigation</span> 
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/browse">Browse</Link></li>
        </ul>
        <div className="search_holder widget navbar-form navbar-right" data-name="search_form">
          <form method="get" action="/search" role="search">
            <input name="q" type="text" placeholder="Search titles, subjects, authors..." title="Enter the terms you wish to search for." aria-label="Search" />
              <input type="submit" className="submit-search" aria-label="Submit Search" />
          </form>
        </div>
      </div>
    </div>
  </nav> 
  );
}
