import { Link } from "react-router-dom";

export default function MainHeader(props) {
  return (  
    <div className="header-wrapper">
      <header className="header-main container-fluid" role="banner">
        <h1 className="sitename">
          <Link to="/">{props.label}</Link>
        </h1>
      </header>
    </div>
  );
}
