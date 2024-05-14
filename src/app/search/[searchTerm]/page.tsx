import Results from "@/components/Results";
import React from "react";

interface SearchProps {
    params: any;
}

const SearchPage: React.FC<SearchProps> = async ({params}) => {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=pt-BR&page=1&include_adult=false`);

    const data = await res.json();
    const results = data.results;

    return (
        <div className="">
            { results && results.length === 0 ? (<h1 className="text-center mx-auto">Nenhum resultado encontrado!</h1>) : (<Results results={results}/>) }
        </div>
    )
}

export default SearchPage