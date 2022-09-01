import { ArticleList } from "./components/ArticleList";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, isLoading } = useFetch(
    "https://api-test-ln.herokuapp.com/articles"
  );

  if (isLoading) {
    return <p>cargando...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <ArticleList data={data} />
      </div>
    </div>
  );
};

export default App;
