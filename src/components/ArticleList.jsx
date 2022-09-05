import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ data }) => {
  const dataSubtype7 = data.filter((item) => item.subtype === "7");
  return (
    <>
      {dataSubtype7.map((item) => (
        <ArticleCard itemData={item} key={item._id} />
      ))}
    </>
  );
};
