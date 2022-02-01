import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer-wrapper">
  	  <div className="footer-wrapper-top">
   	    <footer className="footer-main container-fluid">
          <ul className="footer-nav" role="navigation">
            <li>
              <Link to="/" className="Homelink">Home</Link>
            </li>
            <li>
              <Link to="/about" className="Aboutlink">About</Link>
            </li>
            <li>
            <Link to="/browse" className="Browselink">Browse</Link>
            </li>
            <li className="accessibility-link">
              <a className="external" href="https://www.nyu.edu/footer/accessibility.html" target="_blank">Accessibility <span aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="15" width="15">
                  <path fill="none" stroke="#ffffff" strokeWidth="1" d="m8.6,7H1v12h12V11.4M9,1v2l2,2-6,6 4,4 6-6 2,2h2V1z"></path>
                </svg>
                </span></a></li>
                <li className="feedback-link">
                  <a href="https://nyu.qualtrics.com/jfe/form/SV_8zQOuCi9g0JUVsV?site=indianocean&amp;l=f" target="_blank">Send Feedback 
                  <span aria-hidden="true" role="presentation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="15" width="15">
                      <path fill="none" stroke="#ffffff" strokeWidth="1" d="m8.6,7H1v12h12V11.4M9,1v2l2,2-6,6 4,4 6-6 2,2h2V1z"></path>
                    </svg>
                  </span>
                </a>
            </li>
          </ul>
        </footer>
      </div>
      <footer className="footer-main container-fluid" role="contentinfo">
  	    <div className="logo">
          <a href="http://nyu.edu/" target="_blank" rel="noreferrer">
            <img src="http://dlib.nyu.edu/indianocean/images/nyu_short_white.svg" alt="NYU" />
          </a>
        </div>
        <div className="partner-wrapper">
          <div className="partner-fales">
      	    <a href="http://www.nyu.edu/library/bobst/research/fales/" title="Fales Library and Special Collections" target="_blank" rel="noreferrer">Fales Library and Special Collections</a>
          </div>
          <div className="partner-sochum">
      	    <a href="http://guides.nyu.edu/cat.php?cid=20969" title="Social Sciences and Humanities Department" target="_blank" rel="noreferrer">Social Sciences and Humanities Department</a>
          </div>
          <div className="partner-nyuad">
      	    <a href="http://nyuad.nyu.edu/" title="NYU Abu Dhabi" target="_blank" rel="noreferrer">NYU Abu Dhabi</a>
          </div>
          <div className="partner-dlts">
      	    <a href="http://dlib.nyu.edu/dlts/" title="Digital Library Technology Services" target="_blank" rel="noreferrer">Digital Library Technology Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
