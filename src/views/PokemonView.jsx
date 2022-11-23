import { GetApiFetch } from "../components/GetApiFetch";
import { useFetchRickMorty } from "../hooks";

export const PokemonView = () => {
    const { rickMory, isPrev, pageCount, clickPreviousPokemon, clickNewPokemon } = useFetchRickMorty();
    window.document.title = "Pokemon Pages"
    return (
        <>
            {/* <button onClick={clickPreviousPokemon}>Prev</button> */}
            <div className="container">
                <button className="btn btn-danger ml-2 mr-2" disabled={isPrev} onClick={() => clickPreviousPokemon()}>Prev</button>
                <button className="btn btn-success ml-2 mr-2" onClick={() => clickNewPokemon()}>Next</button>
                <p>Page:{pageCount}</p>
            </div>
            <br />

            <GetApiFetch rickMory={rickMory} />

            <h1>{`Hola A Todos MeLlamo Luis`.split(" ").join(" ")}</h1>
        </>
    )
}
