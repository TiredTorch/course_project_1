/* eslint-disable no-param-reassign */
export const createUrl = (template, params) => {
  
  const keys = template.match(/{\w+}/gm);

  keys.forEach(element => {
    template = template.replace(element, params[`${element.slice(1, -1)}`]);
  });

  return template;
};
