const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Geek Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="newBlogBtn" >New Blog</a>
            </div>
        </nav>
    );
}

export default NavBar;