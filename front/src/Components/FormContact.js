const FormContact = () => {

    return(

        <form action="#" method="post">
             <div className="contact-form">
                <h2>Envoyez-nous un message</h2>
                <div className="form-box">
                    <div className="input-box one">
                        <input type="text" required/>
                        <span>Prénom</span>
                    </div>
                    <div className="input-box one">
                        <input type="text" required/>
                        <span>Nom</span>
                    </div>
                    <div className="input-box one">
                        <input type="email" required/>
                        <span>Email</span>
                    </div>
                    <div className="input-box one">
                        <input type="text" required/>
                        <span>Numéro</span>
                    </div>
                    <div className="input-box two">
                        <textarea required></textarea>
                        <span>Ecrivez votre message ici...</span>
                    </div>
                    <div className="input-box two">
                       <input type="submit" value="Envoyer"/>
                    </div>
                </div>
            </div>
        </form>
    )  
}

export default FormContact
