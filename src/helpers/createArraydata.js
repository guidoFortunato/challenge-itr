import { sortArrayNumber } from "./orderArrays";

export const createArrayTags = (data) => {
  let arrayTags = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].taxonomy.tags.length; j++) {
      let obj = {};
      obj.slug = data[i].taxonomy.tags[j].slug;
      obj.text = data[i].taxonomy.tags[j].text;
      obj.count = 1;
      // obj.id = data[j]._id;
      let isEqual = arrayTags.filter((item) => item.slug === obj.slug);

      if (isEqual[0]) {
        arrayTags.forEach((item) => {
          if (item.slug === obj.slug) {
            item.count++;
          }
        });
      } else {
        arrayTags.push(obj);
      }
    }
  }
  return arrayTags.sort(sortArrayNumber).slice(0, 10);
   
  
};