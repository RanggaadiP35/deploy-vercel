import logo from '../../assets/hero-img.png'
import '../landingPage/landingPage.css';
import CreateProduct from '../../pages/createProduct';

import { Link } from 'react-router-dom';

const Section1 = () => {
    return (
        <section className="section">
            <div className="text">
                <h1>Better Solution For Your</h1>
                <h1>Business</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div className="btn-get">
                    {/* <a href="createProduct.html">Get Started</a> */}
                    <Link to="/CreateProduct" className='watch'>Get Started</Link>
                    <a href=''>Watch Video</a>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Watch video
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">...</div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Image">
                <img src={logo} className="hero" alt="Hero Img" />
            </div>
        </section>
    )
}

export default Section1