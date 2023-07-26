//MIDDLEWARE EXAMPLE (NOT USED)
const log = (store) => (next) => (action) => {
  console.warn(action);
  console.warn(next);
  console.warn(store);
  next(action);
};

export default log;
