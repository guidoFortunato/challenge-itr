import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true
  });

  const getData = async()=>{
    try {
      const res = await fetch(url);
      const data = await res.json();
      const articles = data.articles
      setState({
        articles,
        isLoading: false
      })
    } catch (error) {
      console.log(error);
    }   

  }
  useEffect(() => {

    getData()
   
  }, [url]);


  return {
    data: state.articles,
    isLoading: state.isLoading
  }


};
