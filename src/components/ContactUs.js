
// import Developer from './Developer.jpg';
import Ceo from './Ceo.jpg';
import './Footer.css';

export default function ContactUs() {


    return (
        <>
            <div style={{ "fontFamily": "Arial, Helvetica, sans-serif", "margin": "0", "backgroundColor": "#42fb5d66" }}>
                <div className="aboutSection" style={{ "padding": "50px", "textAlign": "center", "backgroundColor": "#474e5d", "color": "white" }}>
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>

                <h2 style={{ "textAlign": "center" }}>Our Team</h2>
                <div className="row">
                    <div className="column" style={{ "float": "left", "width": "33.3%", "marginBottom": "16px", "padding": "0 8px" }}>
                        <div className="card" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg" alt="Jane" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Jane Doe</h2>
                                <p className="title" style={{ "color": "grey" }}>CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane @example.com</p>
                                <p><button className="button" style={{ "border": "none", "outline": "0", "display": "inlineBlock", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column" style={{ "float": "left", "width": "33.3%", "marginBottom": "16px", "padding": "0 8px" }}>
                        <div className="card" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/5e448f31d182a43aacf8063b4beb0721.jpg" alt="Mike" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Soumyadeep</h2>
                                <p className="title" style={{ "color": "grey" }}>Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike @example.com</p>
                                <p><button className="button" style={{ "border": "none", "outline": "0", "display": "inlineBlock", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column" style={{ "float": "left", "width": "33.3%", "marginBottom": "16px", "padding": "0 8px" }}>
                        <div className="card" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src={Ceo} alt="John" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Sourodeep</h2>
                                <p className="title" style={{ "color": "grey" }}>Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john @example.com</p>
                                <p><button className="button" style={{ "border": "none", "outline": "0", "display": "inline-block", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }}>Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Site footer --> */} 
            <footer className="site-footer"> <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by Soumyadeep Guin.
                                {/* <a href="#">Scanfcode</a>. */}
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://facebook.com"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="https://dribbble.com"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="http://linkedin.com"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}


