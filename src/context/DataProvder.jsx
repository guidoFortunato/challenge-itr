import { createContext, useState } from 'react';

export const DataContext = createContext()


export const DataProvder = ({children}) => {

  const [ orderTags, setOrderTags ] = useState([]);
  const [ completeData, setCompleteData ] = useState([]);

  const fillTags = (item)=>{
    setOrderTags(item)
  }
  const fillData = (item)=>{
    setCompleteData(item)
  }



  return (
    <DataContext.Provider value={{ orderTags, completeData, fillTags, fillData }}>
      { children }
    </DataContext.Provider>
  )
}