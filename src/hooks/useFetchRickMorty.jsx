import { useEffect, useState } from "react";

export const useFetchRickMorty = () => {
    const [pageCount, setPageCount] = useState(1);
    const [rickMory, setRickMory] = useState([]);
    const [isPrev, setisPrev] = useState(false);

    const getRickAndMorty = async () => {
        const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${pageCount}`);
        const data = await resp.json();
        setRickMory([data, ...rickMory]);

        setisPrev(false);

        return data
    }
    const clickNewPokemon = (e) => {
        setPageCount(pageCount + 1);
        getRickAndMorty();
        console.log({ pageCount })
    }
    const clickPreviousPokemon = (e) => {
        if (pageCount <= 1) return setisPrev(true);
        setPageCount(pageCount - 1);
        console.log(pageCount);
        // e.preventDefault();
        if (rickMory[0].info.prev === null) return setisPrev(true);
        getRickAndMorty();
        setisPrev(false);

    }
    useEffect(() => {
        getRickAndMorty();

    }, [pageCount]);
    return {
        //  * Propiedades
        rickMory,
        setRickMory,
        isPrev,
        pageCount,
        // * Metodos
        getRickAndMorty,
        clickNewPokemon,
        clickPreviousPokemon

    }
}
