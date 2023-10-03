import '../landingPage/landingPage.css';
import { Link } from 'react-router-dom';

const FooterLanding = () => {
    return (
        <footer>
            <div className="section-2">
                <h3>Join Our Newsletter</h3>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div className="input-text">
                    <input type="text" id="join" />
                    {/* <a href="createProduct.html">Subscribe</a> */}
                    <Link to="/CreateProduct">Subscribe</Link>
                </div>
            </div>
            <div className="section-3">
                <div className="Arsha">
                    <h3>ARSHA</h3>
                    <p>
                        A108 Adam Street
                        <span className="newyork">New York, NY 535022</span>
                        <span className="united">united States</span>
                    </p>
                    <div className="phone">
                        <label>Phone:</label>&nbsp;
                        <p> +1 5589 55488 55</p>
                    </div>
                    <div className="email">
                        <label>Email:</label>&nbsp;
                        <p> info@example.com</p>
                    </div>
                </div>
                <div className="useful">
                    <h3>Useful Links</h3>
                    <div className="menu">
                        <a href="">Home</a>
                        <a href="">About us</a>
                        <a href="">Services</a>
                        <a href="">Terms of service</a>
                        <a href="">Privacy policy</a>
                    </div>
                </div>
                <div className="our">
                    <h3>Our Services</h3>
                    <div className="menu-our">
                        <a href="">Web Design</a>
                        <a href="">Web DEvelopment</a>
                        <a href="">Product Management</a>
                        <a href="">Marketing</a>
                        <a href="">Graphic Design</a>
                    </div>
                </div>
                <div className="social">
                    <h3>Our Social Networks</h3>
                    <h4>
                        Cras fermentum odio eu feugiat lide par
                        <span className="social-text">
                            naso tierra videa magna derita valies
                        </span>
                    </h4>
                    &nbsp;
                    <div className="menu-social">
                        <a href="" />
                        <a href="" />
                        <a href="" />
                        <a href="" />
                        <a href="" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="copy">
                    <label className='copy-label'>
                        © Copyright <b>Rangga</b>. All Right Reserve
                    </label>
                </div>
                <h5>
                    Designed by <span className="boostrap">BootstrapMade</span>
                </h5>
            </div>
        </footer>

    )
}

export default FooterLanding