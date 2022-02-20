import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Geek Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="newBlogBtn" >New Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;