const Footer = () => {

    return(
        <footer>
         <div className="container-footer">
            <div className="row-footer">
                    <div className="footer-col">
                        <h4>HOME</h4>
                        <ul>
                            <li><a href="">Bookclub</a></li>
                            <li><a href="">Articles</a></li>
                            <li><a href="">ddddd</a></li>
                            <li><a href="">Culture</a></li>
                        </ul>
                    </div>
               
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="">Notre Equipe</a></li>
                        <li><a href="">dddddd</a></li>
                        <li><a href="">Mode</a></li>
                        <li><a href="">Culture</a></li>
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>Finegap</h4>
                    <ul>
                        <li><a href="">Tutorials</a></li>
                        <li><a href="">Art</a></li>
                        <li><a href="">Mode</a></li>
                        <li><a href="">Culture</a></li>
                    </ul>
                </div>
                
                <div className="footer-col"/>
                    <h4>Newsletter</h4>
                    <form action="">
                        <input type="text" placeholder="Ton Nom" className="inputName"/>
                        <input type="email" placeholder="Ton adresse email" className="inputEmail"/>
                        <input type="submit" value="Envoyer" className="inputSubmit"/>
                    </form>
                </div>
            </div>
            
            <div className="row">
                <div className="col">
                    <p> Copyright &#169; 2023 The Bookclub. Tous droits réservés</p>
                </div>
                <div className="socialIcons">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        
        <div/>
        </footer>
    )
}

export default Footer
