export const getTag = (listTags, slug) => {
  
  return listTags.find( item => item.slug === slug )
   
}