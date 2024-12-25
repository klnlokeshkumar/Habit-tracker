import "./Navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>History</li>
                    <li>Your Performance</li>
                </ul>
            </div>
            <div className="navbar-right">
                <input
                    type="text"
                    placeholder="Search Tasks"
                    className="navbar-search-input"
                />
                <button className="navbar-search-button">Search</button>
            </div>
        </nav>
    );
};

export default NavBar;
