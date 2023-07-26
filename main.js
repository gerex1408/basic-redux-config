import axios from "axios";
import store from "./store/configureStore";
import { getTasks, fetchTasks } from "./store/tasks";

store.dispatch(fetchTasks());

// V1 of fetching data from API and store in reducer
// const gettingTasks = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos"
//     );
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     console.warn("Here we should call the error reducer");
//   }
// };

// gettingTasks();
