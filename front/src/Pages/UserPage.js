import FavoriteBook from "../Components/FavoriteBook"
import Recommandations from "../Components/Recommandations"
import BookstoRead from "../Components/BookstoRead"
import BooksRead from "../Components/BooksRead" 
import CurrentRead from "../Components/CurrentRead"

const UserPage = () => {
    return(
        <main className="main-user">
        <aside>
            
            <div className="profile-pic">
                <label className="-label" for="file">
                <span className="picture-icon"></span>
                <span>Ajoute ton image</span>
                </label>
                <img src="./kisspng-computer-icons-user-profile-avatar-male-logo-5b4f36c91c0059.0009918615319180251147.png" alt="icon-avatar"/>
                <h3>Username</h3>
                <ul>
                    <a href="#"><li>Mes coups de coeur</li></a>
                    <a href="#"><li>Ma pile à lire</li></a>
                    <a href="#"><li>Livres que j'ai lus</li></a>
                    <a href="#"><li>Lectures du moment</li></a>
                </ul>
            </div>
        </aside>

        <section className="main-section">
            <section className="main">
                <h1>MY BOOKSHELF</h1>
                    <FavoriteBook/>
                    <BooksRead/>
                    <BookstoRead/>
                    <CurrentRead/>
            </section>
            <Recommandations/>
        </section>
    </main>
    )
}

export default UserPage