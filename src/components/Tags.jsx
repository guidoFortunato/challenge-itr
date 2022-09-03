import { useContext } from "react";
import { DataContext } from "../context/DataProvder";


export const Tags = ({ dataTags }) => {
  const { orderTags } = useContext(DataContext);
  
  
  return (
    <>
      {dataTags.map((item, index) => {
        return (
          <span key={index}>
            {item.slug} <br />
          </span>
        );
      })}
    </>
  );
};
