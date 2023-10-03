import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/landingPage/landingPage.css';

function Header() {
    return (
        <header className="container-fluid">
            <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Feature
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                        FAQs
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                        About
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header