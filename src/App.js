import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/any"
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <div>
      <h1>
        {data?.setup} : {data?.delivery}
      </h1>

      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
