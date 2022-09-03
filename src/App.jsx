import { useContext, useEffect } from "react";
import { ArticleList } from "./components/ArticleList";
import { DataContext } from "./context/DataProvder";
import { createArrayTags } from "./helpers/createArraydata";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, isLoading } = useFetch(
    "https://api-test-ln.herokuapp.com/articles"
  );

  const { fillTags } = useContext(DataContext);

  
  useEffect(() => {
    if (!isLoading) {

      const tags = createArrayTags(data)
      fillTags(tags);
    }
  }, [isLoading, data]);

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
