export const Tags = ({ tagsList }) => {
  const { tags } = tagsList;

  return (
    <>
      {tags.map(( item, index) => (
        <span key={index} >{ item.slug } - { item.text }</span>
      ))}
      
    </>
  );
};
