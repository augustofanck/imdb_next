import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams: any;
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=pt-BR&page=1`,
      { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if(!res.ok){
    throw new Error('Falha na busca de dados. Tente novamente.')
  }
  const results = data.results;

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}

export default Home
