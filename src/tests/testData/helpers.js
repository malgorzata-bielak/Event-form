export const getChildById = (component, id) => component.dive().find(`#${id}`);
