import axios from "axios";
import store from "./store/configureStore";
import { fetchTasks } from "./store/tasks";

store.dispatch(fetchTasks());
