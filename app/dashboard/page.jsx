"use client";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Dashboard = () => {
  const { data, error } = useSWR(" https://pokeapi.co/api/v2/pokemon", fetcher);

  if (!data) return <div>Loading...</div>;

  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
