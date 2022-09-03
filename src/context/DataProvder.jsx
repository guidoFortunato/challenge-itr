import { createContext, useState } from 'react';

export const DataContext = createContext()


export const DataProvder = ({children}) => {

  const [ orderTags, setOrderTags ] = useState([]);

  const fillTags = (item)=>{
    setOrderTags(item)
  }



  return (
    <DataContext.Provider value={{ orderTags, fillTags }}>
      { children }
    </DataContext.Provider>
  )
}