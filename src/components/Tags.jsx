import { useState } from "react";

export const Tags = ({ tagsList }) => {
  const { tags } = tagsList;
  // console.log(tagsList)
  // console.log(tags);

  return (
    <>
      {tags.map((item, index) => {
        // console.log(item);
        
          return (
            <span key={index}>
              {item.slug} <br />
            </span>
          );
       
      })}
    </>
  );
};
