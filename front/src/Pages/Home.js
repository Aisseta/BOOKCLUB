import MonthlyReco from "../Components/MonthlyReco"



const Home = () => {

    return(
        <main className="main-home">
        {/*------------ Premier bloc --------------*/}
        <section className="presentation">
            <article className="presentation-title">
                <h4><em>La bibliothèque digitale</em></h4>
                <h1 className="project-title">THE BOOKCLUB</h1>
                <p> The bookclub c'est la bibliothèque virtuelle qui te permet d'organiser tes lectures au quotidien!</p>
                <input className="info-btn" type="button" value="Plus d'infos"/>
            </article>
            <div className="presentation-img">
                <img className="presentation-img" src="./images/pexels-cottonbro-studio-6344242.jpg" alt=""/>
            </div>
            <span className="presentation-square"></span>
        </section>
        {/*------------ Deuxième bloc -------------*/}
        <section className="second-section">
            <h2>Organise ta bibliothèque en ligne gratuitement</h2>
            <article className="second-section-content">
                <article>
                    <img src="" alt=""/>
                    <h3>ORGANISER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <img src="" alt=""/>
                    <h3>METTRE A JOUR </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <img src="" alt=""/>
                    <h3>INTERAGIR</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
            </article>
        </section>
        {/*------------ Troisième bloc -------------*/}
        <MonthlyReco/>
        {/*------------ Quatrième bloc (citation) --------------*/}
        <section class="fourth-section">
            <h1 class="citation">“La vraie lecture commence quand on ne lit plus seulement pour 
                se distraire et se fuir, mais pour se trouver.”</h1>
            <h2 class="citation-author">Jean Guéhenno</h2>
        </section>

        {/*------------ Cinquième section bloc (articles)  --------------*/}
        <section class="fifth-section">
            <div class="article-card">
                <article>
                    <h2> 8 conseils pour lire plus de livres</h2>
                    <p>Pour lire plus, il faut comme dans tous les domaines de notre vie, trouver notre POURQUOI.
                        Si vous avez du mal à reprendre la lecture, commencez par lire uniquement ce qui vous fait plaisir.
                        Parfois on peut avoir envie de lire un essai mais n’avoir pourtant pas la motivation de se mettre à ce genre de livre.
                        Il n’y a pas de mauvais livre !  
                        Il y a juste celui qui convient à votre humeur du moment.</p>
                        <button>voir plus</button>

                </article>
                
                <img src="./Assets/images/pexels-cottonbro-studio-6344242.jpg" alt=""/>
            </div>
            <div class="article-card">
                <img src="./Assets/images/pexels-cottonbro-studio-6344231.jpg" alt=""/>
                <article>
                    <h2> Comment développer des habitudes de lectures</h2>
                    <p>Passer plus de temps à lire, c’est faire de la place à des choses qui nous enrichissent. 
                        C’est bien mieux que d’être passif devant a télévision pour passer le temps. 
                        C’est une activité si simple et bénéfique, et pourtant tellement négligée.</p>
                    <button>voir plus</button>
                </article>
            </div>

        </section>

    </main>
    )
}

export default Home