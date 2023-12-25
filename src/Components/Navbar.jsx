import "../styles/navbar.css";

export default function Navbar() {
    const userLoggedIn = (
        <div className="nav__container">
            <nav className="home__nav">
                <div className="home__nav__branding">
                    <img
                        src="../../assets/images/logo.png"
                        className="home__nav__logo"
                    />
                    <h1 className="home__nav__name">
                        <a href="" className="home__nav__home__link">
                            Lifesync
                        </a>
                    </h1>
                </div>
                <ul className="home__nav__list">
                    <li className="home__nav__list__item">
                        <a href="" className="home__nav__list__link">
                            About Us
                        </a>
                    </li>
                    <li className="home__nav__list__item">
                        <a href="" className="home__nav__list__link">
                            Devs
                        </a>
                    </li>
                    <li className="home__nav__list__item">
                        <a href="" className="home__nav__list__link">
                            Services
                        </a>
                    </li>
                    <li className="home__nav__list__item">
                        <a href="" className="home__nav__list__link">
                            Reviews
                        </a>
                    </li>
                    <li className="home__nav__list__item home__nav__list__user">
                        <a href="" className="home__nav__list__link">
                            {localStorage.getItem("name")}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );

    const login = (
        <div className="nav__container">
            <nav className="home__nav">
                <img
                    src="../../assets/images/logo.png"
                    className="home__nav__logo"
                />
                <ul className="home__nav__list">
                    <li className="home__nav__list__item">About Us</li>
                    <li className="home__nav__list__item">Devs</li>
                    <li className="home__nav__list__item">Serivces</li>
                    <li className="home__nav__list__item">Reviews</li>
                    <li className="home__nav__list__item home__nav__list__button">
                        Login
                    </li>
                </ul>
            </nav>
        </div>
    );

    const returnElement = localStorage.getItem("user") ? userLoggedIn : login;

    return returnElement;
}
