const NavBar = () => {


    return( 
        <nav className="nav-bar">
            <a className="logo" href="#">THE BOOKCLUB</a>
            <div className="nav-links">
                <ul>
                    <li ><a href="#" className="active">BOOKCLUB</a></li>
                    <li className=""><a href="#">ARTICLES</a></li>
                    <li className=""><a href="#">LIBRAIRIE</a></li>
                    <li><a href="#">CONTACT</a></li> 
                </ul>
            </div>
            <button className="login_btn">Se connecter</button>
            <img src="./icone burger.png" alt="menu hamburger" className="menu-hamburger"/>
        </nav>
    )
}
export default NavBar