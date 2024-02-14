import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {

    

        return(

        <main className="wrapper">
            <div className="carroussel-login">
                <img src="./images/pexels-cottonbro-studio-6344231.jpg" alt="etagere de livres" className="carrousel"/>
            </div>
            <div className="login-box">
                <article className="login-form-box">
                    <h2>Welcome to The Bookclub</h2>
                    <form action="#">
                        <div className="input-box">
                            <img src="./images/mail-outline.svg" alt="" icon-email/>
                            <input type="email" name="email" />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-box">
                            <img src="./images/lock-closed-outline.svg" alt="" icon-email/>
                            <input type="password" name="password"  />
                            <label htmlFor="">Mot de passe</label>
                        </div>
                        <div className="forgot-remember">
                            <label htmlFor=""><input type="checkbox"/>Remember me</label>
                            <button>Oublie de mot de passe</button>
                        </div>
                        <button type="submit" className="btn-login" >Se connecter</button>
                    </form>
                        <div className="login-register">
                            <p> Pas de compte
                                <Link to="/register" className="register-link">S'inscrire </Link>
                            </p>   
                        </div>
                </article>
            </div>
        </main>
        )
}
export default Login