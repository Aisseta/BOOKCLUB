const Recommandations = () => {


    return(
        <section className="recommandations">
        <h2>Nos recommandations</h2>
        <p>personalisées pour toi</p>
        <div className="books-recommandation">
            <article>
            <img src="./images/COVER3.png" alt="couverture de livres"/>
                <h5>Auteur</h5>
                <p>titre</p>
                <button>ajoutez à ma collection</button>
            </article>
            <article>
                <img src="./Assets/images/COVER4.jpeg" alt="couverture de livres"/>
                <h5>Auteur</h5>
                <p>titre</p>
                <button>ajoutez à ma collection</button>
            </article>
            <article>
                <img src="./Assets/images/1Q84.jpeg" alt="couverture de livres "/>
                <h5>Auteur</h5>
                <p>titre</p>
                <button>ajoutez à ma collection</button>
            </article>
        </div>
    </section>
    )
}

export default Recommandations