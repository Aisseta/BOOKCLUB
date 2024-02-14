const MonthlyReco = () => {


    return(

        <section className="third-section">
        <h2>Nos recommendations du mois</h2>
        <h5> une sélection unique pour inspirer tes futures lectures</h5>
        <article className="book-carrousel">
            <article>
                <img className="bookcover" src="./images/1Q84.jpeg" alt="cover 1Q84"/>
                <p className="title">Name of the book</p>
                <p className="author">Author of the book</p>
                <p>note</p>
            </article>
            <article>
                <img className="bookcover" src="./images/COVER3.png" alt=""/>
                <p className="title">Name of the book</p>
                <p className="author">Author of the book</p>
                <p>note</p>
            </article>
            <article>
                <img className="bookcover" src="./images/COVER4.jpeg" alt=""/>
                <p className="title">Name of the book</p>
                <p className="author">Author of the book</p>
                <p>note</p>
            </article>
        </article>
        
    </section>
    )
}

export default MonthlyReco