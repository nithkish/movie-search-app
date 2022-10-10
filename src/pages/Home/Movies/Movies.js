import MoviesList from "./MoviesList/MoviesList";
import Summary  from "./Summary/Summary";


const Movies=() =>{
    return (
        <>
        <section>
            <MoviesList />
        </section>
        <aside>
            <Summary />
        </aside>
        </>
    )
}

export default Movies;