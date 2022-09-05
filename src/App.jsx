import { useContext, useEffect } from "react";
import { ArticleList } from "./components/ArticleList";
import { OrderTags } from "./components/OrderTags";
import { Spinner } from "./components/Spinner";
import { DataContext } from "./context/DataProvider";
import { createArrayTags } from "./helpers/createArraydata";
import { useFetch } from "./hooks/useFetch";


const App = () => {
  const url = "https://api-test-ln.herokuapp.com/articles";
  const { data, isLoading } = useFetch(url);
  


  const { fillTags, fillData } = useContext(DataContext);

  useEffect(() => {
    if (!isLoading) {
      const tags = createArrayTags(data);
      fillTags(tags);
      fillData(data);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container py-3">
      <h2>Tags ordenados</h2>
      <div className="row">
        <OrderTags />
      </div>
      <h2 className="mt-3">Grilla</h2>
      <div className="row">
        <ArticleList data={data} />
      </div>
    </div>
  );
};

export default App;
