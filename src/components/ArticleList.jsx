import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ArticleCard data={item} key={item._id} />
      ))}
    </>
  );
};
