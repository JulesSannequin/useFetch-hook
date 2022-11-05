import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://v2.jokeapi.dev/joke/any"
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <div>
      <h1>
        {data?.setup} : {data?.delivery}
      </h1>
    </div>
  );
}

export default App;
