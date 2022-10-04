const routes = ["/", "/inside", "/harmfulness", "/quit-now"];

export const routeLookUp = (current, step) => {
  const index = routes.indexOf(current);
  //alert(index);

  if (step < 0 && index + step < 0) return current;
  if (index + step > routes.length - 1) return current;
  const next = routes[index + step];
  //alert(current, next);
  return next;
};

export default routes;
