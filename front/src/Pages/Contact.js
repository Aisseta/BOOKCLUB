import FormContact from "../Components/FormContact"

const Contact = () => {

    return(
        <section className="form-section">
        <main className="main-contact">
        <div className="container">
            <div className="contact-info">
                <div>
                    <h2>Info Contact</h2>
                    <ul className="info">
                        <li>
                            <a><i className="fa-solid fa-location-dot fa-beat fa-2x"></i></a>
                            <span>14 Rue Rowling
                                75002, Paris
                            </span>  
                        </li>
                        <li>
                            <a href=""><i className="fa-solid fa-envelopes-bulk fa-2x"></i></a>
                            <span>thebookclub@hello.com</span>
                        </li>
                        <li>
                            <a href=""><i className="fa-solid fa-mobile-button fa-2x"></i></a>
                            <span>+7 34 78 09 67</span>
                        </li>
                    </ul>
                    <ul className="sci">
                        <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
                    <FormContact/>
         </div>

        </main>
        </section>
    )
}

export default Contact 