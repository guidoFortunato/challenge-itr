import { useEffect, useState } from "react";
import { ArticleList } from "./components/ArticleList";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, isLoading } = useFetch(
    "https://api-test-ln.herokuapp.com/articles"
  );

  const [resultado, setResultado] = useState([]);

  function SortArray(x, y) {
    
    return x.count.localeCompare(y.count);
  }
  
  // console.log(data)
  // const dataTags = data.taxonomy.tags;
 
  
  useEffect(() => {
    if (!isLoading) {
      let result = []
      // console.log('entri')
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        
       
        for (let j = 0; j < data[i].taxonomy.tags.length; j++) {
          let obj = {}
          obj.slug = data[i].taxonomy.tags[j].slug
          obj.text = data[i].taxonomy.tags[j].text
          obj.count = "1"
          let existe = result.filter( item=> item.slug === obj.slug )
         
          if (existe[0]) {
           
            result.forEach(item => {
              if (item.slug === obj.slug) {
                item.count = parseInt(item.count++)
                item.count = toString(item.count)
              }
              
            });
            
          }else{
            result.push(obj)
           
          }
          // console.log(obj)
        }
        
      }
      setResultado(result)
      
      
    }
  }, [isLoading,data]);

  const resultadoFinal = resultado.sort(SortArray);
  console.log(resultadoFinal)
  




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
