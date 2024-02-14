import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

        return(

        <main className="wrapper">
            <div className="carroussel-login">
                <img src="./images/pexels-cottonbro-studio-6344231.jpg" alt="etagere de livres" className="carrousel"/>
            </div>
            <div className="login-box">
                <article className="login-form-box">
                    <h2>Welcome to The Bookclub</h2>
                    <form method="POST" onSubmit={handleSubmit}>
                    <div className="input-box">
                            <input type="text" name="name"
                            onChange={(e) =>setName(e.target.value)}/>
                            <label htmlFor="Name">Name</label>
                        </div>

                        <div className="input-box">
                            <img src="./images/mail-outline.svg" alt="" />
                            <input type="email"  name="email"
                            onChange={(e) =>setEmail(e.target.value)}/>
                            <label htmlFor="Email">Email</label>
                        </div>
                        <div className="input-box">
                            <img src="./images/lock-closed-outline.svg" alt="" />
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="Password">Mot de passe</label>
                        </div>
                        <div className="forgot-remember">
                            <label htmlFor="Remember"><input type="checkbox"/>Remember me</label>
                            <button type="submit">Oublie de mot de passe</button>
                        </div>
                        <button type="submit" className="btn-login">S'inscrire</button>
                    </form>
                        <div className="login-register">
                            <p> Déja inscris,
                                <Link to="/login" className="login-link">Connecte-toi </Link>
                            </p>   
                        </div>
                </article>
            </div>
        </main>
        )
}

export default Register
